import React from "react";
import Netflix_Logo from "../assets/Netflix_Logo.png";
import translateIcon from "../assets/translate-icon.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-1 px-30">
      <div className="left">
        <img src={Netflix_Logo} alt="Netflix Logo" className="h-20 w-auto" />
      </div>

      <div className="right flex items-center justify-center gap-4">
        <div className="relative border border-gray-500 bg-black/50 text-white rounded-md hover:border-white transition-colors duration-200 px-1.5 py-1.4">
          <img
            src={translateIcon}
            alt="Translate"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none brightness-0 invert "
          />
          <select className="bg-transparent text-white py-[6px] pl-9 pr-8 focus:outline-none cursor-pointer appearance-none text-sm font-medium w-full block">
            <option className="text-black bg-white" value="English">English</option>
            <option className="text-black bg-white" value="Hindi">हिंदी</option>
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-1.5 rounded-md transition-colors w-[100px]">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;