import axios from 'axios'
import { useEffect } from 'react'

const FetchAnimeRecommend = (setAnimes) => {
    useEffect(() => {
        axios.get('https://api.jikan.moe/v3/anime/1/recommendations')
            .then(result => {
                const animes = result.data.recommendations.slice(0, 3)
                setAnimes(animes)
            })
    }, [])
}

export default FetchAnimeRecommend
