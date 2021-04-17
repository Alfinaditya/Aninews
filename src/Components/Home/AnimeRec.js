import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FetchData from '../../hooks/FetchData'

const AnimeRec = () => {
    const ANIME_URL = 'https://api.jikan.moe/v3/anime/1/recommendations'
    const { data, loading, error } = FetchData(ANIME_URL)
    const listAnime = data.recommendations
    return (
        <div className='mt-12'>
            {/* {.length > 0 && console.log(data.recommendations)} */}
            <p className='font-bold text-xl'>Anime <span className='text-main'>recommendations</span></p>
            <div className='flex mt-5 flex-wrap'>
                {listAnime && listAnime.slice(0, 5).map((anime) => (
                    <a key={anime.mal_id} className=' mx-2 w-48'>
                        <img className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl' src={anime.image_url} alt='' />
                        <p className=' ml-3 mt-6 font-bold'>{anime.title}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default AnimeRec
