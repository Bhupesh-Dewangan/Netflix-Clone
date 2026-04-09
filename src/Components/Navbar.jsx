import React from "react";
import Netflix_Logo from "../assets/Netflix_Logo.png";
import translateIcon from "../assets/translate-icon.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 sm:px-6 md:px-10 lg:px-16">
      <div className="left">
        <Link to="/">
          <img src={Netflix_Logo} alt="Netflix Logo" className="h-10 w-auto sm:h-12 md:h-14 lg:h-20" />
        </Link>
      </div>

      <div className="right flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative hidden rounded-md border border-gray-500 bg-black/50 px-1.5 py-1 text-white transition-colors duration-200 hover:border-white sm:block">
          <img
            src={translateIcon}
            alt="Translate"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none brightness-0 invert "
          />
          <select className="block w-full cursor-pointer appearance-none bg-transparent py-1 pl-9 pr-8 text-sm font-medium text-white focus:outline-none">
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

        <Link to="/login">
          <button className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-bold text-white transition-colors hover:bg-red-700 sm:px-4 sm:text-base">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
