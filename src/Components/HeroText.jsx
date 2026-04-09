import React from 'react'
import { Link } from 'react-router-dom'

function HeroText() {
    return (
        <div className="mx-auto mb-14 flex w-[92%] max-w-4xl flex-col items-center justify-center gap-4 pt-20 text-white sm:mb-16 sm:w-[85%] md:gap-5 md:pt-28 lg:mb-24 lg:w-[70%] xl:w-[52%]">
            <h1 className="my-2 text-center text-3xl font-bold leading-tight sm:text-4xl md:my-3 md:text-5xl lg:text-6xl">Unlimited movies, shows, and more</h1>
            <p className="text-center text-base font-bold sm:text-lg md:text-xl">Starts at ₹149. Cancel at any time.</p>
            <p className="text-center text-sm sm:text-base md:text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex w-full flex-col gap-2 sm:flex-row">
                <input type="email" placeholder="Email address" className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white sm:w-[60%]" />
                <Link to="/login" className="flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-3 text-center font-bold text-white hover:bg-red-700 sm:w-[40%]">
                    Get Started <span className="text-2xl pl-5"> &gt; </span>
                </Link>
            </div>
        </div>
    )
}

export default HeroText