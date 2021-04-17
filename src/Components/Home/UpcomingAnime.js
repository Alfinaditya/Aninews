import React from 'react'
import FetchData from '../../hooks/FetchData'

const UpcomingAnime = () => {
    const UPCOMING_ANIME = 'https://api.jikan.moe/v3/top/anime/1/upcoming'
    const { data, loading, error } = FetchData(UPCOMING_ANIME)
    const listAnime = data.top
    return (
        <div>
            {/* Title */}
            <p className='font-bold text-xl'>Top upcoming anime</p>

            {/* Anime List */}
            <div className='mt-9' >
                {/* Anime */}
                {listAnime && listAnime.slice(0, 10).map(anime => (
                    <div className='flex mt-4 w-56' key={anime.mal_id}>
                        {/* Anime Images */}
                        <img src={anime.image_url} className='w-24 h-24'></img>
                        {/* Anime Text */}
                        <div className='ml-3'>
                            <p className='font-bold'>{anime.title}</p>
                            <p className='text-gray-400 py-2'>{anime.start_date}</p>
                            <div className='bg-blue-primary  py-1 px-5 w-16 rounded-xl'>
                                <p className='font-medium text-center'>{anime.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingAnime
