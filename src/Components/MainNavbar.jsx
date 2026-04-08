import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Netflix_Logo from '../assets/Netflix_Logo.png'
import { CiSearch, CiBellOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { logout } from '../firebase'


function MainNavbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="flex justify-between items-center bg-black w-full px-10 border-b border-gray-800 h-14">
            <div className="left">
                <Link to="/">
                    <img src={Netflix_Logo} alt="Netflix Logo" className="h-10 w-auto" />
                </Link>
            </div>

            <div className="mid">
                <ul className="flex justify-around gap-8 text-white text-sm">
                    <li className=' transition-colors duration-200 hover:bg-red-600 px-3 py-1 rounded-full'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className=' transition-colors duration-200 hover:bg-red-600 px-3 py-1 rounded-full'>
                        <Link to="/">TV Shows</Link>
                    </li>
                    <li className=' transition-colors duration-200 hover:bg-red-600 px-3 py-1 rounded-full'>
                        <Link to="/">Movies</Link>
                    </li>
                    <li className=' transition-colors duration-200 hover:bg-red-600 px-3 py-1 rounded-full'>
                        <Link to="/">New & Popular</Link>
                    </li>
                    <li className=' transition-colors duration-200 hover:bg-red-600 px-3 py-1 rounded-full'>
                        <Link to="/">My List</Link>
                    </li>
                </ul>
            </div>

            <div className='SearchBar flex items-center gap-2'>
                <CiSearch className='text-white w-6 h-6 text-bold hover:scale-110 transition-tr ansform duration-200' />
                <input type="text" placeholder='Search' className='bg-black text-white text-sm border border-gray-800 rounded-full px-2 py-1 w-80' />
            </div>

            <div className="right flex gap-8 items-center">
                <CiBellOn className='text-white w-6 h-6 text-bold hover:scale-110 transition-transform duration-200' />

                <div className="relative">
                    <div className="cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                        <FaUser className='text-white w-6 h-6 text-bold hover:scale-110 transition-transform duration-200' />
                    </div>
                    {showDropdown && (
                        <div className="absolute right-0 mt-3 w-32 bg-black border border-gray-800 rounded-md shadow-lg z-50">
                            <ul className="py-2 text-white text-sm">
                                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-200">
                                    <Link to='/profile' className="block w-full h-full">Profile</Link>
                                </li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-200 text-left"
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
    )
}

export default MainNavbar