import { useState } from "react";
import Image from "next/image"; // or your preferred image component

export default function ResponsiveHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "APPOINTMENTS" },
    { href: "#", label: "MEDICAL CARD INFO" },
    { href: "#", label: "FAQs" },
    { href: "#", label: "PHARMACIES" },
    { href: "#", label: "ABOUT" },
  ];

  return (
    <>
      {/* Desktop / large screens header */}
      <div
        className="hidden lg:block relative bg-cover bg-center h-160 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-[#084502]"
        style={{ backgroundImage: "url('/base/topheaderimage.webp')" }}
      >
        <nav className="pt-12">
          <ul className="flex justify-center space-x-25 font-proximanova">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[#084502] hover:text-green-700 font-bold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-auto z-10">
          <Image
            src="/base/utahgrownlogowhiteborder.svg"
            alt="Bottom Decoration"
            width={692}
            height={334}
            priority
          />
        </div>
      </div>

      {/* Mobile / tablet header with hamburger */}
      <div className="block lg:hidden bg-[#084502] p-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="base/utahgrownlogowhiteborder.svg"
              alt="Logo"
              width={100}
              height={48}
              priority
            />
          </div>

          {/* Hamburger toggle button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                // Close icon (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile nav menu */}
        {menuOpen && (
          <ul className="mt-4 flex flex-col space-y-3 text-white font-bold">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
