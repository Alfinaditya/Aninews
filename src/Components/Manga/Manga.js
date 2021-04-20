import React, { useState } from 'react'
import FetchData from '../../hooks/FetchData'
import FetchSearchData from '../../hooks/FetchSearchData'
import MangaHeader from './MangaHeader'
import Pagination from '../global/Pagination'
import DataBody from '../global/DataBody'

const Manga = (input) => {
    const [page, setPage] = useState(0)
    const [select, setSelect] = useState('manga')

    // CUSTOM URL
    const MANGA_URL = `https://api.jikan.moe/v3/top/manga/${page + 1}/${select}`
    const SEARCH_MANGA = `https://api.jikan.moe/v3/search/manga?q=${input}&type=anime&order_by=title&page=${page + 1}`

    // CUSTOM HOOK
    const { data, loading, error } = FetchData(MANGA_URL, page)
    const { searchData, searchLoading, searchError } = FetchSearchData(SEARCH_MANGA, input)

    const listManga = data.top

    return (
        <div>
            <MangaHeader select={select} setSelect={setSelect} />
            <DataBody shows={listManga} />
            {listManga && listManga.length >= 50 && <Pagination data={listManga} page={page} setPage={setPage} />}
        </div>
    )
}

export default Manga
