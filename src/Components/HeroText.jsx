import React from 'react'

function HeroText() {
    return (
        <div className="text-white flex flex-col items-center justify-center gap-5 w-[40%] m-auto pt-40 ">
            <h1 className="text-6xl font-bold text-center my-3">Unlimited movies, shows, and more</h1>
            <p className="text-xl font-bold">Starts at ₹149. Cancel at any time.</p>
            <p className="text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="flex gap-2 w-full">
                <input type="email" placeholder="Email address" className="bg-transparent border border-gray-500  text-white rounded-md px-4 py-3 w-[60%]" />
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-md w-[40%]">Get Started  <span className="text-2xl pl-5"> &gt; </span></button>
            </div>
        </div>
    )
}

export default HeroText