import React from 'react'
import BackArrowIcon from '../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Player() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2EwMGNmNjRlZDlhYmY5NWQxYTY3ZjMzYjM3ZDkxNCIsIm5iZiI6MTc3NTU2ODA2NC4zMDQ5OTk4LCJzdWIiOiI2OWQ1MDRjMDcwZWM0YzgyYjY2YWU0MGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vkCJlxoKS0WtWNOBbMQL5yXJZImXkDXoH_CILYgClWo'
        }
    };

    const { id } = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState({ key: "" });

    useEffect(() => {
        if (!id) {
            navigate("/dashboard");
            return;
        }

        if (id == 16022004) {
            setPlayer({ key: "80dqOwAOhbo?si=PVZswqBgJ5HDYinl" });
        } else {
            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
                .then(res => res.json())
                .then(res => {
                    if (res.results && res.results.length > 0) {
                        setPlayer(res.results[0]);
                    }
                })
                .catch(err => console.error(err));
        }
    }, [id, navigate]);

    return (
        <div className='relative flex h-screen w-full items-center justify-center bg-black px-3 sm:px-6'>
            <img src={BackArrowIcon} alt="Back Arrow Icon" className='absolute left-3 top-4 h-8 w-8 cursor-pointer sm:left-5 sm:top-5 sm:h-10 sm:w-10' onClick={() => navigate(-1)} />
            <iframe className='h-[34vh] w-full rounded-md sm:h-[55vh] md:h-[70vh] lg:h-[82vh] lg:w-[92%]' src={`https://www.youtube.com/embed/${player.key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default Player;      