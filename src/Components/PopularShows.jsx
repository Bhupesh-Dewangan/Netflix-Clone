import React from 'react'
import ShowCards from '../Data/Cards.js'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PopularShows({ title, category }) {
    const [movies, setMovies] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2EwMGNmNjRlZDlhYmY5NWQxYTY3ZjMzYjM3ZDkxNCIsIm5iZiI6MTc3NTU2ODA2NC4zMDQ5OTk4LCJzdWIiOiI2OWQ1MDRjMDcwZWM0YzgyYjY2YWU0MGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vkCJlxoKS0WtWNOBbMQL5yXJZImXkDXoH_CILYgClWo'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setMovies(res.results))
            .catch(err => console.error(err));
    }, [category]);
    return (
        <div className="w-full px-4 sm:px-6 lg:px-10">
            <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">{title ? title : "Popular Shows"}</h2>
            {/* Hiding scrollbar but allowing horizontal scroll */}
            <div className='flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                {movies.map((card, index) => (
                    <Link to={`/player/${card.id}`} key={index} className='flex w-[75vw] shrink-0 flex-col sm:w-[280px] md:w-[320px]'>
                        <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.name} className="w-full h-auto aspect-video rounded-md object-cover cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10" />
                        <p className='text-white text-sm mt-2 font-bold'>{card.original_title}</p>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}

export default PopularShows