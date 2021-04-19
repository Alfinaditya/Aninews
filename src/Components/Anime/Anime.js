import React, { useState } from 'react'
import FetchData from '../../hooks/FetchData'
import AnimePagination from './AnimePagination'

const Anime = ({ input }) => {
    const [page, setPage] = useState(0)
    const [select, setSelect] = useState('airing')
    const ANIME_URL = `https://api.jikan.moe/v3/top/anime/${page + 1}/${select}`
    const SEARCH_ANIME = `https://api.jikan.moe/v3/search/type?q=${input}&${page + 1}`
    const { data, loading, error } = FetchData(ANIME_URL, SEARCH_ANIME, input, page)
    const listAnime = data.top
    return (
        <div>
            {/* Header */}
            <div className='flex justify-between'>
                {select === 'airing' || select === 'upcoming' ?
                    <p className='font-bold text-xl'>New <span className='text-main'>Releases</span></p> :
                    <p className='font-bold text-xl'>Top <span className='text-main'>Anime</span></p>}

                <select className='w-80 outline-none font-medium cursor-pointer' onChange={e => setSelect(e.target.value)}>
                    <option value='airing'>Airing</option>
                    <option value='upcoming' >Upcoming</option>
                    <option value='tv'>TV</option>
                    <option value='movie'>Movie</option>
                    <option value='ova'>Ova</option>
                    <option value='special'>Special</option>
                </select>
            </div>
            {/* Anime Section */}
            <div className='grid grid-cols-5 mt-8'>
                {listAnime && listAnime.map(anime => (
                    <a className='w-48 mb-10 mx-3' key={anime.mal_id}>
                        <img src={anime.image_url} className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl '></img>
                        <p className=' ml-3 mt-6 font-bold'>{anime.title}</p>
                        <p className=' ml-3 mt-2 font-normal'>
                            {anime.start_date} - {anime.end_date === null ? 'Airing' : anime.end_date}
                        </p>
                        <p className=' ml-3 mt-2 text-main font-bold'>{anime.score}</p>
                    </a>
                ))}
            </div>
            {/* Pagination */}
            <AnimePagination listAnime={listAnime} page={page} setPage={setPage} />
        </div >
    )
}

export default Anime
