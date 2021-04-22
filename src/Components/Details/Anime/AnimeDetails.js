import React, { useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import FetchData from '../../../hooks/FetchData';

const AnimeDetails = () => {
    const history = useHistory()
    const location = useLocation();
    const { id } = useParams()
    const ANIME_URL = `https://api.jikan.moe/v3/anime/${id}`
    const { data } = FetchData(ANIME_URL)
    const anime = data

    return (
        <div className='max-w-6xl px-4'>
            <div className='flex justify-between'>

                {/* Image And Title */}
                <img src={anime.image_url} className='w-80 h-96' ></img>
                <div className='w-3/5'>
                    <h1 className='font-quicksand font-medium text-3xl'>{anime.title}</h1>
                    <p className='font-roboto font-light mt-3'>{anime.synopsis}</p>

                    {/* Anime Category */}
                    <div className='my-3 flex justify-between'>
                        <div>
                            <p><span className='font-bold text-main'>Japanese : </span>{anime.title_japanese}</p>
                            <p><span className='font-bold text-main'>Type : </span>{anime.type}</p>
                            <p><span className='font-bold text-main'>Status : </span>{anime.status}</p>
                            <p><span className='font-bold text-main'>Premiered : </span>{anime.premiered}</p>
                        </div>
                        <div>
                            <p><span className='font-bold text-main'>Score : </span>{anime.score}</p>
                            <p><span className='font-bold text-main'>Episodes : </span>{anime.episodes}</p>
                            <p><span className='font-bold text-main'>Rating : </span>{anime.rating}</p>
                            <p><span className='font-bold text-main'>Duration : </span>{anime.duration}</p>
                        </div>

                    </div>

                    {/* Anime Genres */}
                    <div className='mt-4 flex flex-wrap'>
                        {anime.genres && anime.genres.map(genre => (
                            <div key={genre.mal_id} className='bg-main p-1 px-4 mr-1 rounded-full text-white mb-2'>{genre.name}</div>
                        ))}
                    </div>
                </div>
            </div >

            <div className='w-72 rounded-xl '>
                <p onClick={() => { history.go(-1) }} className='decoration cursor-pointer'>Back</p>
            </div>
            {/* Score */}
            {/* <div className='w-72 rounded-xl '>
                <div className='bg-main text-white text-lg font-medium p-1 rounded-xl text-center'>
                    Score
                </div>
                <p className='text-center font-bold text-4xl mt-3'>{anime.score}</p>
            </div> */}
        </div >
    )
}

export default AnimeDetails
