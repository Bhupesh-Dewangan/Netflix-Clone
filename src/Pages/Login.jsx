import Netflix_Logo from "../assets/Netflix_Logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerLinks from "../Data/Links";
import translateIcon from "../assets/translate-icon.svg";

function Login() {
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
          <h1 className="text-3xl font-bold mb-5 ">
            Enter your info to sign in
          </h1>
          <div className="flex flex-col gap-2 w-full  mb-6">
            <form action="" className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-gray-500  text-white rounded-md  py-3 px-4 w-full"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent border border-gray-500  text-white rounded-md  py-3 px-4 w-full"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-md w-full mt-2">
                Continue
              </button>
            </form>
          </div>

          <div>
            <p className="text-md text-gray-200 text-center mb-2 italic">New to Netflix? <Link to="/signup" className="text-white hover:underline">Sign up now</Link></p>
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
              <div className="space-y-2 flex flex-col">
                <a href="#" className="text-sm underline">
                  Format email or password?
                </a>
                <a href="#" className="text-sm underline">
                  Learn more about Sign-in
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


    </div>
  );
}

export default Login;
