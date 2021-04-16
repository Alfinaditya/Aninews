import axios from 'axios'
import React, { useEffect } from 'react'

const FetchMangaRecommend = (setMangas) => {
    useEffect(() => {
        axios.get('https://api.jikan.moe/v3/manga/1/recommendations')
            .then(result => {
                const mangas = result.data.recommendations.slice(0, 3)
                setMangas(mangas)
            })
    }, [])
}

export default FetchMangaRecommend
