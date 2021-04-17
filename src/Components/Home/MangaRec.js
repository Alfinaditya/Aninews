import React from 'react'
import FetchData from '../../hooks/FetchData'

const MangaRec = () => {
    const MANGA_URL = 'https://api.jikan.moe/v3/manga/1/recommendations'
    const { data, loading, error } = FetchData(MANGA_URL)
    const listManga = data.recommendations
    return (
        <div className='mt-12 mb-56'>
            <p className='font-bold text-xl'>Manga recommendations</p>
            <div className='flex mt-5 flex-wrap'>
                {listManga && listManga.slice(0, 3).map((manga) => (
                    <a key={manga.mal_id}>
                        <img className='w-48 h-36 rounded-sm mx-2 shadow-lg hover:shadow-xl' src={manga.image_url} alt='' />
                        <p className=' ml-3 mt-6 font-bold'>{manga.title}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default MangaRec
