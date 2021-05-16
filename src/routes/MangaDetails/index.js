import React from 'react'
import { useParams } from 'react-router'
import FetchData from '../../hooks/FetchData'
import Description from './components/Description'
import ImagesAndScore from './components/ImageAndScore'

const MangaDetails = () => {
    const { id } = useParams()
    const MANGA_URL = `https://api.jikan.moe/v3/manga/${id}`
    const { data, loading } = FetchData(MANGA_URL)
    const manga = data

    return (
        <div className='max-w-6xl px-4'>
            {loading ? <h1>Loading...</h1> :
                <div className='flex lg:justify-between flex-wrap justify-center'>
                    <ImagesAndScore manga={manga} />
                    <Description manga={manga} />
                </div>
            }
        </div>
    )
}

export default MangaDetails
