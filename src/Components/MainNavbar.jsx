import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Netflix_Logo from '../assets/Netflix_Logo.png'
import { CiSearch, CiBellOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { logout } from '../firebase'


function MainNavbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

    return (
        <div className="relative w-full border-b border-gray-800 bg-black px-4 py-3 sm:px-6 lg:px-10">
            <div className="flex h-auto w-full flex-wrap items-center justify-between gap-3 lg:h-14 lg:flex-nowrap lg:gap-4">
                <div className="left flex items-center gap-3">
                    <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-700 text-white lg:hidden"
                        aria-label="Toggle menu"
                        onClick={() => setShowMenu((prev) => !prev)}
                    >
                        <span className="text-xl leading-none">{showMenu ? "x" : "≡"}</span>
                    </button>
                    <Link to="/">
                        <img src={Netflix_Logo} alt="Netflix Logo" className="h-8 w-auto sm:h-10" />
                    </Link>
                </div>

                <div className="mid hidden lg:block">
                    <ul className="flex justify-around gap-5 text-sm text-white xl:gap-8">
                        {navItems.map((item) => (
                            <li key={item} className='rounded-full px-3 py-1 transition-colors duration-200 hover:bg-red-600'>
                                <Link to="/">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='SearchBar order-3 flex w-full items-center gap-2 sm:order-none sm:w-auto'>
                    <CiSearch className='h-6 w-6 text-bold text-white transition-tr ansform duration-200 hover:scale-110' />
                    <input type="text" placeholder='Search' className='w-full rounded-full border border-gray-800 bg-black px-3 py-1 text-sm text-white sm:w-52 md:w-72 lg:w-60 xl:w-80' />
                </div>

                <div className="right flex items-center gap-4 sm:gap-6 lg:gap-8">
                    <CiBellOn className='h-6 w-6 text-bold text-white transition-transform duration-200 hover:scale-110' />

                    <div className="relative">
                        <div className="cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                            <FaUser className='h-6 w-6 text-bold text-white transition-transform duration-200 hover:scale-110' />
                        </div>
                        {showDropdown && (
                            <div className="absolute right-0 z-50 mt-3 w-32 rounded-md border border-gray-800 bg-black shadow-lg">
                                <ul className="py-2 text-sm text-white">
                                    <li className="cursor-pointer px-4 py-2 transition-colors duration-200 hover:bg-gray-800">
                                        <Link to='/profile' className="block h-full w-full">Profile</Link>
                                    </li>
                                    <li
                                        className="cursor-pointer px-4 py-2 text-left transition-colors duration-200 hover:bg-gray-800"
                                        onClick={() => {
                                            logout();
                                            setShowDropdown(false);
                                        }}
                                    >
                                        Sign Out
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showMenu && (
                <div className="mt-3 rounded-md border border-gray-800 bg-zinc-900/95 p-2 lg:hidden">
                    <ul className="flex flex-col text-sm text-white">
                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    to="/"
                                    className="block rounded-md px-3 py-2 transition-colors hover:bg-zinc-800"
                                    onClick={() => setShowMenu(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MainNavbar