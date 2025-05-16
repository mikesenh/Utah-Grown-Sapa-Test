import React, { useState } from "react";

const faqData = [
  { question: "If I don’t qualify, do i still have to pay the QMP?" },
  { question: "What are Utah’s qualifying medical conditions?" },
  { question: "Is documentation required to prove you have a medical condition?" },
  { question: "If I have a medical cannabis card, can I consume in public?" },
  { question: "What are the eligiblity requirements for a Utah medical cannabis card?" },
  { question: "What is the complete cost to get a medical cannabis card?" },
  { question: "How long does it take to receive your card?" },
  { question: "Where can I purchase medical cannabis in Utah?" },
  { question: "Can I grow my own cannabis plants with a medical cannabis card?" },
  { question: "How long is a medical cannabis card valid" },
  { question: "Is my personal information confidential when applying for a medical cannabis card?" },
];

export default function FAQToggle() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


const toggleIndex = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
};

  return (
    <div className="mx-auto max-w-6xl py-8">
      <h1 className="text-4xl font-bold mb-4 text-[#084502] font-proximanova">FAQs...</h1>
      <div>
        {faqData.map((item, idx) => (
          <div key={idx} className="mb-4">
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full text-left font-bold text-[#3e7c1f] text-lg focus:outline-none"
            >
              {item.question}
            </button>
            {openIndex === idx && (
              <p className="mt-2 text-gray-700 italic">
                Information missing — please update.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
