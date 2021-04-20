import React, { useState } from 'react'
import FetchData from '../../hooks/FetchData'
import FetchSearchData from '../../hooks/FetchSearchData'
import AnimeBody from './AnimeBody'
import AnimeHeader from './AnimeHeader'
import AnimePagination from './AnimePagination'
import AnimeSearchBody from './AnimeSearchBody'

const Anime = ({ input }) => {
    const [page, setPage] = useState(0)
    const [select, setSelect] = useState('airing')

    // URL
    const ANIME_URL = `https://api.jikan.moe/v3/top/anime/${page + 1}/${select}`
    const SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&type=anime&order_by=title&page=${page + 1}`

    // Custom Hook
    const { data, loading, error } = FetchData(ANIME_URL, page)
    const { searchData, searchLoading, searchError } = FetchSearchData(SEARCH_ANIME, input)

    // list Anime Body
    const listAnime = data.top

    return (
        <div>
            <AnimeHeader select={select} setSelect={setSelect} />
            <AnimeSearchBody searchData={searchData} />
            <AnimeBody listAnime={listAnime} />
            <AnimePagination listAnime={listAnime} page={page} setPage={setPage} />
        </div >
    )
}

export default Anime
