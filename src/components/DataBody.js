import React from 'react'
import { Link } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/outline';
const DataBody = ({ shows }) => {
    return (
        <div className='mt-8 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 '>
            {shows && shows.map(show => {
                const path = setPath(show)
                return (
                    <Link to={path} className='w-48 mb-10 mx-3' key={show.mal_id}>
                        <img src={show.image_url} className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl '></img>
                        <p className='mt-6 font-bold'>{show.title}</p>
                        <p className='mt-2 font-normal'>
                            {show.start_date} - {show.end_date === null ? 'Airing' : show.end_date}
                        </p>
                        <div className='mt-2 text-main font-bold flex items-center'>
                            <StarIcon className='w-5 h-5' />
                            <p className='ml-2'>{show.score}</p>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}

function setPath(show) {
    const animeType = ['TV', 'Movie', 'OVA', 'ONA', 'Special', 'Music']
    const mangaType = ['Manga', 'Novel', 'One', 'Doujinshi', 'Manhwa', 'Manhua']
    if (animeType.includes(show.type)) return `anime/${show.mal_id}`
    if (mangaType.includes(show.type)) return `manga/${show.mal_id}`
}

export default DataBody
