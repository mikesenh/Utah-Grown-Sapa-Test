import React from "react";

type InfoCardProps = {
  location?: string;
  date?: string;
  timeInfo?: string;
  buttonLabel?: string;
  onButtonClick: () => void;
};

export default function InfoCard({
  location = "Downtown SLC",
  date = "Tuesday, October 3rd 2023",
  timeInfo = "9:00 am - 2:00pm\nNew Patients and Renewals",
  buttonLabel = "Book Time",
  onButtonClick,
}: InfoCardProps) {
  return (
    <div className="flex flex-wrap md:flex-nowrap border border-[#084502] rounded-2xl p-4 gap-6 max-w-6xl mx-auto my-4 bg-[#f3f3f3]">
      {/* Section 1: Centered Text */}
      <div className="w-full md:w-1/4 flex items-center justify-center text-center">
        <span className="text-[#397e25] text-lg font-medium">{location}</span>
      </div>

      {/* Section 2: Heading and Paragraph */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-center md:text-left">
        <div>
          <h2 className="text-3xl font-extrabold mb-2 text-[#084502]">{date}</h2>
          <p className="whitespace-pre-line text-[#397e25] text-xl">{timeInfo}</p>
        </div>
      </div>

      {/* Section 3: Button */}
      <div className="w-full md:w-1/4 flex items-center justify-center">
        <button
          onClick={onButtonClick}
          className="cursor-pointer bg-[#ead0b7] text-lg px-7 text-[#397e25] py-2 rounded-full hover:bg-[#397e25] hover:text-white transition"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}