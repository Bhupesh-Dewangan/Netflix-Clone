import React from 'react'
import { Link } from 'react-router-dom'
import Netflix_Logo from '../assets/Netflix_Logo.png'
import { CiSearch, CiBellOn } from "react-icons/ci";


function MainNavbar() {
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

            <div className='SearchBar'>
                <input type="text" placeholder='Search' className='bg-black text-white text-sm border border-gray-800 rounded-full px-2 py-1 w-80' />
            </div>

            <div className="right flex gap-8 items-center">

                <CiSearch className='text-white w-6 h-6 text-bold hover:scale-110 transition-transform duration-200' />
                <CiBellOn className='text-white w-6 h-6 text-bold hover:scale-110 transition-transform duration-200' />

                <Link to="/login">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-1.5 rounded-md transition-colors w-25">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MainNavbar