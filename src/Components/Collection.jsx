import React from 'react'
import PopularShows from './PopularShows'

function Collection() {
    const titles = [
        "Popular Shows",
        "Now Playing",
        "Top Rated",
        "Upcoming"
    ]

    const categories = [
        "popular",
        "now_playing",
        "top_rated",
        "upcoming"
    ]
    return (
        <div className='flex flex-col gap-7 my-10'>
            {titles.map((title, index) =>
                <PopularShows key={index} title={title} category={categories[index]} />
            )}

        </div>
    )
}

export default Collection