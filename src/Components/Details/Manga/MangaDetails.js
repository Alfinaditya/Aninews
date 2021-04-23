import React from 'react'
import { useParams } from 'react-router'
import FetchData from '../../../hooks/FetchData'
import MangaDescriptions from './MangaDescriptions'
import MangaImagesAndScore from './MangaImagesAndScore'

const MangaDetails = () => {
    const { id } = useParams()
    const MANGA_URL = `https://api.jikan.moe/v3/manga/${id}`
    const { data } = FetchData(MANGA_URL)
    const manga = data

    return (
        <div className='max-w-6xl px-4'>
            <div className='flex justify-between '>
                <MangaImagesAndScore manga={manga} />
                <MangaDescriptions manga={manga} />
            </div>
        </div>
    )
}

export default MangaDetails
