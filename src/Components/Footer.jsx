import React from 'react'
import footerLinks from '../Data/Links'
import translateIcon from '../assets/translate-icon.svg'

function Footer() {
    return (
        <footer className="bg-[#141414] px-4 py-10 text-sm text-gray-200 sm:px-8 lg:px-[10%]">
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
            <div className="relative mb-6 w-40 rounded-md border border-gray-500 bg-black/50 px-1.5 py-1 text-white transition-colors duration-200 hover:border-white sm:w-44">
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
    )
}

export default Footer