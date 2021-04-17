import React from 'react'
import FetchData from '../../hooks/FetchData'

const MangaRec = () => {
    const MANGA_URL = 'https://api.jikan.moe/v3/manga/1/recommendations'
    const { data, loading, error } = FetchData(MANGA_URL)
    const listManga = data.recommendations
    return (
        <div className='mt-12 mb-10'>
            <p className='font-bold text-xl'>Manga <span className='text-main'>recommendations</span></p>
            <div className='flex mt-5 flex-wrap'>
                {listManga && listManga.slice(0, 5).map((manga) => (
                    <a key={manga.mal_id} className=' mx-2 w-48'>
                        <img className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl' src={manga.image_url} alt='' />
                        <p className=' ml-3 mt-6 font-bold'>{manga.title}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default MangaRec
