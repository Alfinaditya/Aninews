import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import FetchData from '../../../hooks/FetchData';
import AnimeDescriptions from './components/Description';
import AnimeDetailsAndScore from './components/DetailsAndScore';

const AnimeDetails = () => {

    const { id } = useParams()
    const ANIME_URL = `https://api.jikan.moe/v3/anime/${id}`
    const { data } = FetchData(ANIME_URL)
    const anime = data

    return (
        <div className='max-w-6xl px-4'>
            <div className='flex justify-between '>
                <AnimeDetailsAndScore anime={anime} />
                <AnimeDescriptions anime={anime} />
            </div >
        </div >
    )
}

export default AnimeDetails
