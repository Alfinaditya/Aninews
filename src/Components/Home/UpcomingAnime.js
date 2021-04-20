import React from 'react'
import FetchData from '../../hooks/FetchData'

const UpcomingAnime = () => {
    const UPCOMING_ANIME = 'https://api.jikan.moe/v3/top/anime/1/upcoming'
    const { data, loading, error } = FetchData(UPCOMING_ANIME)
    const listAnime = data.top
    return (
        <div>
            <p className='font-bold text-xl'><span className='text-main'>Upcoming</span> anime</p>
            <div className='grid grid-cols-5 mt-8'>
                {listAnime && listAnime.slice(0, 10).map((anime) => (
                    <a key={anime.mal_id} className='w-48 mb-10 mx-3' >
                        <img className='w-48 h-36 rounded-sm  shadow-lg hover:shadow-xl' src={anime.image_url} alt='' />
                        <p className='mt-6 font-bold'>{anime.title}</p>
                        <p className='mt-2 font-normal'>
                            {anime.start_date === null ? '' : anime.start_date} - {anime.end_date === null ? '' : anime.end_date}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default UpcomingAnime
