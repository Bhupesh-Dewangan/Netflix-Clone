import React from 'react'
import TV from '../assets/tv.svg'
import Download from '../assets/download.svg'
import Smilee from '../assets/smilee.svg'
import Scope from '../assets/scope.svg'

function ReasonsToJoin() {
    const cards = [
        {
            title: "Enjoy on your TV",
            description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            icon: TV,
        },
        {
            title: "Download your shows to watch offline",
            description: "Save your favourites easily and always have something to watch.",
            icon: Download,
        },
        {
            title: "Watch everywhere",
            description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            icon: Scope,
        },
        {
            title: "Create profiles for kids",
            description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
            icon: Smilee,
        },
    ]

    return (
        <section className="mx-auto mb-10 w-[92%] sm:w-[88%] lg:w-[85%]">
            <h1 className="mb-5 text-left text-2xl font-bold tracking-tight text-white md:text-[1.65rem]">More reasons to join</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {cards.map((card) => (
                    <div key={card.title} className="relative min-h-52 rounded-2xl p-5 text-white shadow-[0_10px_40px_rgba(74,13,26,0.6)] bg-gradient-to-br from-[#1f2a4a] via-[#2b1e3f] to-[#4a0d1a] sm:p-6">
                        <h2 className="mb-3 pr-14 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">{card.title}</h2>
                        <p className="mb-12 text-left text-sm tracking-tight text-white sm:text-base">{card.description}</p>
                        <img src={card.icon} alt={card.title} className="absolute bottom-5 right-5 h-10 w-10 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12" />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default ReasonsToJoin;