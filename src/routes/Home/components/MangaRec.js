import React from 'react'
import { Link } from 'react-router-dom'
import FetchData from '../../../hooks/FetchData'

const MangaRec = () => {
    const MANGA_URL = 'https://api.jikan.moe/v3/manga/1/recommendations'
    const { data, loading, error } = FetchData(MANGA_URL)
    const listManga = data.recommendations
    return (
        <div className='mt-12 mb-10'>
            <p className='font-bold text-xl'>Manga <span className='text-main'>recommendations</span></p>
            <div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 mt-8'>
                {listManga && listManga.slice(0, 15).map((manga) => (
                    <Link to={`manga/${manga.mal_id}`} key={manga.mal_id} className='w-48 mb-10 mx-3'>
                        <img className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl' src={manga.image_url} alt='' />
                        <p className='mt-6 font-bold'>{manga.title}</p>
                    </Link>
                ))}
            </div>
            <Link to='/manga'>
                <p className="text-main rounded font-medium text-lg underline">More manga...</p>
            </Link>
        </div>
    )
}

export default MangaRec