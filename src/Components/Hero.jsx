import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../assets/Hero_banner.jpg'
import HeroTitle from '../assets/banner_tittle.png'
import { FaPlay } from "react-icons/fa";

function Hero() {
    return (
        <div className="relative h-[76vh] min-h-[420px] w-full text-white sm:h-[82vh]">
            <img src={HeroImage} alt="Hero Banner" className='h-full w-full object-cover' />
            <div className='bg-black/50 absolute inset-0'></div>
            <div className='absolute left-[5%] top-[20%] w-[90%] pr-0 sm:left-[8%] sm:top-[50%] sm:w-[78%] md:w-[64%] lg:left-[55%] lg:top-[40%] lg:w-[42vw] lg:pr-4'>
                <img src={HeroTitle} alt="Hero Title" className='mb-3 w-[80%] max-w-md sm:w-[70%] md:w-[60%] lg:w-full' />
                <p className='mb-5 w-full text-sm italic text-gray-300 sm:text-base'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                <div className='flex flex-wrap gap-3'>
                    <Link to="/player/16022004">
                        <button className='flex items-center gap-2 rounded-md bg-red-600 px-6 py-2 font-bold text-white transition-colors duration-200 hover:bg-red-700 hover:text-black sm:px-8'>  <FaPlay className='' /> Play</button>
                    </Link>
                    <button className='rounded-md bg-gray-500 px-6 py-2 font-bold text-white transition-colors duration-200 hover:bg-gray-600 hover:text-black sm:px-8'>More Info</button>
                </div>
            </div>
        </div >
    )
}

export default Hero
