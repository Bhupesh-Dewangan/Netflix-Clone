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
        <div className='w-full h-screen flex items-center justify-center'>
            <img src={BackArrowIcon} alt="Back Arrow Icon" className='absolute top-5 left-5 w-10 h-10 cursor-pointer' onClick={() => navigate(-1)} />
            <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${player.key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen   ></iframe>
        </div>
    )
}

export default Player;      