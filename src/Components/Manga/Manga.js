import React, { useState } from 'react'
import FetchData from '../../hooks/FetchData'
import FetchSearchData from '../../hooks/FetchSearchData'
import MangaHeader from './MangaHeader'

const Manga = (input) => {
    const [page, setPage] = useState(0)
    const [select, setSelect] = useState('airing')

    // CUSTOM URL
    const MANGA_URL = `https://api.jikan.moe/v3/top/manga/${page + 1}/manga`
    const SEARCH_MANGA = `https://api.jikan.moe/v3/search/manga?q=${input}&type=anime&order_by=title&page=${page + 1}`

    // CUSTOM HOOK
    const { data, loading, error } = FetchData(MANGA_URL, page)
    const { searchData, searchLoading, searchError } = FetchSearchData(SEARCH_MANGA, input)

    const listManga = data.top
    return (
        <div>
            {/* <MangaHeader /> */}
        </div>
    )
}

export default Manga
