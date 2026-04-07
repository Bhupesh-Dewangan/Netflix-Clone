import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../assets/Hero_banner.jpg'
import HeroTitle from '../assets/banner_tittle.png'
import { FaPlay } from "react-icons/fa";
import PopularShows from './PopularShows';

function Hero() {
    return (
        <div className="text-white relative w-full h-full">
            <img src={HeroImage} alt="Hero Banner" className='w-full h-full object-cover' />
            <div className='bg-black/50 absolute inset-0'></div>
            <div className='absolute left-[55%] top-[30%] w-[42vw] h-full pr-4'>
                <img src={HeroTitle} alt="Hero Title" className='w-full mb-3' />
                <p className='text-gray-300 text-md italic w-full mb-5'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                <div className='flex gap-3'>
                    <Link to="/signup">
                        <button className='text-white font-bold px-8 py-2 rounded-md bg-red-600 hover:bg-red-700 hover:text-black transition-colors duration-200 flex items-center gap-2'>  <FaPlay className='' /> Play</button>
                    </Link>
                    <button className='text-white font-bold px-8 py-2 rounded-md bg-gray-500 hover:bg-gray-600 hover:text-black transition-colors duration-200'>More Info</button>
                </div>
            </div>

            <div className="absolute bottom-4 left-0 w-full z-20">
                <PopularShows />
            </div>

        </div >
    )
}

export default Hero
