import React, { useState } from 'react'
import FetchData from '../../hooks/FetchData'
import FetchSearchData from '../../hooks/FetchSearchData'
import AnimeHeader from './AnimeHeader'
import Pagination from '../global/Pagination'
import DataBody from '../global/DataBody'
import DataSearchBody from '../global/DataSearchBody'

const Anime = ({ input }) => {
    const [page, setPage] = useState(0)
    const [select, setSelect] = useState('airing')

    // URL
    let SEARCH_ANIME;
    const ANIME_URL = `https://api.jikan.moe/v3/top/anime/${page + 1}/${select}`
    if (select === 'airing' || select === 'upcoming') {
        SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&status=${select}g&order_by=title`
    } else {
        SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&type=${select}&order_by=title`
    }


    // Custom Hook
    const { data, loading, error } = FetchData(ANIME_URL, page)
    const { searchData, searchLoading, searchError } = FetchSearchData(SEARCH_ANIME, input)

    // list Anime Body
    const listAnime = data.top

    return (
        <div>
            <AnimeHeader select={select} setSelect={setSelect} />
            <DataSearchBody shows={searchData} />

            {/* if array search data less than one or null */}
            {searchData && searchData.length < 1 &&
                <>
                    <DataBody shows={listAnime} />
                    {listAnime && listAnime.length >= 50 && <Pagination data={listAnime} page={page} setPage={setPage} />}
                </>
            }
        </div >
    )
}

export default Anime
