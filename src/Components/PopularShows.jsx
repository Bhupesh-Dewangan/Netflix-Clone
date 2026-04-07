import React from 'react'
import ShowCards from '../Data/Cards.js'

function PopularShows({ title }) {
    return (
        <div className="px-10 w-full">
            <h2 className="text-2xl font-bold text-white mb-2">{title ? title : "Popular Shows"}</h2>
            {/* Hiding scrollbar but allowing horizontal scroll */}
            <div className='flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                {ShowCards.map((card, index) => (
                    <div key={index} className='flex flex-col shrink-0 w-[2000px] sm:w-[250px] md:w-[300px]'>
                        <img src={card.image} alt={card.name} className="w-full h-auto aspect-video rounded-md object-cover cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10" />
                        <p className='text-white text-sm mt-2 font-bold'>{card.name}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default PopularShows