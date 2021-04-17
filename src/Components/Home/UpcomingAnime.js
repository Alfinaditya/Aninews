import React from 'react'
import FetchData from '../../hooks/FetchData'

const UpcomingAnime = () => {
    const UPCOMING_ANIME = 'https://api.jikan.moe/v3/top/anime/1/upcoming'
    const { data, loading, error } = FetchData(UPCOMING_ANIME)
    const listAnime = data.top
    return (
        <div>
            <p className='font-bold text-xl'><span className='text-main'>Upcoming</span> anime</p>
            <div className='flex mt-5 flex-wrap'>
                {listAnime && listAnime.slice(0, 5).map((anime) => (
                    <a key={anime.mal_id} className='w-48 mx-2'>
                        <img className='w-48 h-36 rounded-sm  shadow-lg hover:shadow-xl' src={anime.image_url} alt='' />
                        <p className=' ml-3 mt-6 font-bold'>{anime.title}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default UpcomingAnime
