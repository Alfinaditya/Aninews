import React from 'react'
import { useParams } from 'react-router'
import FetchData from '../../hooks/FetchData';
import Description from './components/Description';
import DetailsAndScore from './components/DetailsAndScore';

const AnimeDetails = () => {

    const { id } = useParams()
    const ANIME_URL = `https://api.jikan.moe/v3/anime/${id}`
    const { data, loading } = FetchData(ANIME_URL)
    const anime = data

    return (
        <div className='max-w-6xl px-4'>
            {loading ? <h1>Loading...</h1> :
                <div className='flex lg:justify-between flex-wrap justify-center'>
                    <DetailsAndScore anime={anime} />
                    <Description anime={anime} />
                </div >
            }
        </div >
    )
}

export default AnimeDetails
