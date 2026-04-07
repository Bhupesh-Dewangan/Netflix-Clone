import React from 'react'
import PopularShows from './PopularShows'

function Collection() {
    const titles = [
        "Trending Now",
        "New Releases",
        "Top Rated",
        "Blockbuster Movies",
        "Only on Netflix",
        "Indian TV Shows",
        "Action & Adventure",
        "Comedy",
        "Horror",
        "Thriller",
        "Sci-Fi",
        "Drama",
        "Romance",
        "Family",
        "Kids",
        "Documentaries",
        "Reality TV",
        "Sports",
        "Music",
        "Animation",
        "Foreign",
        "Award-Winning",
        "Critically Acclaimed"
    ]
    return (
        <div className='flex flex-col gap-7 my-10'>
            {titles.map((title, index) =>
                <PopularShows key={index} title={title} />
            )}

        </div>
    )
}

export default Collection