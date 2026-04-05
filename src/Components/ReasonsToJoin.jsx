import React from 'react'
import TV from '../assets/tv.svg'
import Download from '../assets/download.svg'
import Smilee from '../assets/smilee.svg'
import Scope from '../assets/scope.svg'

function ReasonsToJoin() {
    return (
        <section className="w-[85%] mx-auto">
            <h1 className="mb-5 text-left text-2xl font-bold tracking-tight text-white md:text-[1.65rem]">More reasons to join</h1>

            <div class="grid grid-cols-4 gap-4 h-72 mb-10">
                <div class="w-full h-auto rounded-2xl p-6 text-white relative
            bg-linear-to-br 
            from-[#1f2a4a] via-[#2b1e3f] to-[#4a0d1a]
            shadow-[0_10px_40px_rgba(74,13,26,0.6)]">
                    <h2 className="mb-3 text-left text-2xl font-bold tracking-tight text-white ">Enjoy on your TV</h2>
                    <p className="mb-2 text-left text-md tracking-tight text-white ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    <img src={TV} alt="tv" className="absolute bottom-6 right-6" />
                </div>

                <div class="w-full h-auto rounded-2xl p-6 text-white relative
            bg-linear-to-br 
            from-[#1f2a4a] via-[#2b1e3f] to-[#4a0d1a]
            shadow-[0_10px_40px_rgba(74,13,26,0.6)]">
                    <h2 className="mb-3 text-left text-2xl font-bold tracking-tight text-white ">Download your shows to watch offline</h2>
                    <p className="mb-2 text-left text-md tracking-tight text-white ">Save your favourites easily and always have something to watch.</p>
                    <img src={Download} alt="tv" className="absolute bottom-6 right-6" />
                </div>

                <div class="w-full h-auto rounded-2xl p-6 text-white relative
            bg-linear-to-br 
            from-[#1f2a4a] via-[#2b1e3f] to-[#4a0d1a]
            shadow-[0_10px_40px_rgba(74,13,26,0.6)]">
                    <h2 className="mb-3 text-left text-2xl font-bold tracking-tight text-white ">Watch everywhere</h2>
                    <p className="mb-2 text-left text-md tracking-tight text-white ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <img src={Scope} alt="tv" className="absolute bottom-6 right-6" />
                </div>

                <div class="w-full h-auto rounded-2xl p-6 text-white relative
            bg-linear-to-br 
            from-[#1f2a4a] via-[#2b1e3f] to-[#4a0d1a]
            shadow-[0_10px_40px_rgba(74,13,26,0.6)]">
                    <h2 className="mb-3 text-left text-2xl font-bold tracking-tight text-white ">Create profiles for kids</h2>
                    <p className="mb-2 text-left text-md tracking-tight text-white ">Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                    <img src={Smilee} alt="tv" className="absolute bottom-6 right-6" />
                </div>

            </div>

        </section>
    )
}

export default ReasonsToJoin;