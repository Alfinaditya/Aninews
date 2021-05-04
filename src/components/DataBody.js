import React from 'react'
import { Link } from 'react-router-dom'

const DataBody = ({ shows }) => {
    return (
        <div className='grid grid-cols-5 mt-8'>
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
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            <p className='ml-2'>{show.score}</p>
                        </div>
                    </Link>

                )
            })}

        </div>
    )
}

function setPath(show) {
    const animeType = ['TV', 'Movie', 'OVA', 'ONA', 'Special']
    const mangaType = ['Manga', 'Novel', 'One', 'Doujinshi', 'Manhwa', 'Manhua']
    if (animeType.includes(show.type)) return `anime/${show.mal_id}`
    if (mangaType.includes(show.type)) return `manga/${show.mal_id}`
}

export default DataBody
