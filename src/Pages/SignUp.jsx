import Netflix_Logo from "../assets/Netflix_Logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerLinks from "../Data/Links";
import translateIcon from "../assets/translate-icon.svg";

function SignUp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" h-screen w-full bg-linear-to-b from-[#300000]  to-[#050000]">
      <nav className="border-b border-gray-900 flex item-start justify-start pl-[10%] py-1">
        <Link to="/">
          <img src={Netflix_Logo} alt="Netflix Logo" className="h-20 w-auto" />
        </Link>
      </nav>

      <div className="flex items-start justify-center h-auto min-h-screen">
        <div className=" text-white mt-10 rounded-md w-[min(90%,450px)]">
          <h1 className="text-3xl font-bold mb-2.5 ">
            Enter your info to sign in
          </h1>
          <h2 className="text-slate-200 mb-5.5">
            Or get started with a new account.
          </h2>
          <div className="flex flex-col gap-2 w-full  mb-6">
            <form action="">
              <input
                type="email"
                placeholder="Email or Mobile Number"
                className="bg-transparent border border-gray-500  text-white rounded-md  py-3 px-4 w-full"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-md w-full mt-2">
                Continue
              </button>
            </form>
          </div>

          <div>
            <p className="text-md text-gray-200 text-center mb-2 italic">Or</p>
            <Link to="/dashboard">
              <p className="text-lg text-gray-200 text-center cursor-pointer hover:underline">Continue with a new account</p>
            </Link>

          </div>

          <div className="w-full">
            <div
              className="flex items-center mt-10 text-md text-gray-200 cursor-pointer w-max"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>Get Help</span>

              <svg
                className={`ml-2 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                  }`}
                width="20"
                height="12"
                viewBox="0 0 200 120"
              >
                <polyline
                  points="20,30 100,100 180,30"
                  fill="none"
                  stroke="white"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            ></div>

            {isOpen && (
              <div className="mt-4 space-y-2 flex flex-col">
                <a href="#" className="text-sm underline">
                  Format email or mobile number?
                </a>
                <a href="#" className="text-sm underline">
                  Learn more about Sign-up
                </a>
              </div>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-6">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>

      <footer className="bg-[#141414] text-gray-200 px-[10%] py-10 text-sm">
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
      </footer>
    </div>
  );
}

export default SignUp;
