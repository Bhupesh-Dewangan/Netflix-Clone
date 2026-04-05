import React from "react";
import translateIcon from "../assets/translate-icon.svg";
import footerLinks from "../Data/Links";

function FooterSection() {
  return (
    <section className="w-[85%] mx-auto mb-10">
      <p className="text-lg text-center text-white mt-6 mb-6">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex gap-2 w-[70%] mx-auto mb-6">
        <input
          type="email"
          placeholder="Email address"
          className="bg-transparent border border-gray-500  text-white rounded-md px-4 py-3 w-[80%]"
        />
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-md w-[40%]">
          Get Started <span className="text-2xl pl-5"> &gt; </span>
        </button>
      </div>

      <footer className="bg-black text-gray-400 px-[10%] py-10 text-sm">
        {/* Top Text */}
        <p className="mb-6">
          Questions? Call{" "}
          <span className="underline cursor-pointer">000-800-919-1743</span>
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {footerLinks.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-3">
              {column.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Language Selector */}
        <div className="relative border border-gray-500 bg-black/50 text-white rounded-md hover:border-white transition-colors duration-200 px-1.5 py-1.4 mb-6 w-[15%]">
          <img
            src={translateIcon}
            alt="Translate"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none brightness-0 invert "
          />
          <select className="bg-transparent text-white py-1.5 pl-9 pr-8 focus:outline-none cursor-pointer appearance-none text-sm font-medium w-full block">
            <option className="text-black bg-white" value="English">
              English
            </option>
            <option className="text-black bg-white" value="Hindi">
              हिंदी
            </option>
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Region */}
        <p className="mb-6">Netflix India</p>

        {/* Bottom Note */}
        <p className="text-xs text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </footer>
    </section>
  );
}

export default FooterSection;
