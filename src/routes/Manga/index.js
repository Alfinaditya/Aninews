import React, { useState } from 'react'
import FetchData from '../../hooks/FetchData'
import FetchSearchData from '../../hooks/FetchSearchData'
import Header from './components/Header'
import Pagination from '../../components/Pagination'
import DataSearchBody from '../../components/DataSearchBody'
import DataBody from '../../components/DataBody'

const Manga = ({ input }) => {
    const [page, setPage] = useState(0)
    const [select, setSelect] = useState('manga')

    // CUSTOM URL
    const MANGA_URL = `https://api.jikan.moe/v3/top/manga/${page + 1}/${select}`
    const SEARCH_MANGA = `https://api.jikan.moe/v3/search/manga?q=${input}&type=${select}&order_by=title&page=${page + 1}`

    // CUSTOM HOOK
    const { data, loading, error } = FetchData(MANGA_URL, page)
    const { searchData, searchLoading, searchError } = FetchSearchData(SEARCH_MANGA, input)

    const listManga = data.top

    return (
        <div>
            <Header select={select} setSelect={setSelect} />
            <DataSearchBody shows={searchData} />
            <DataBody shows={listManga} />
            {listManga && listManga.length >= 50 && <Pagination data={listManga} page={page} setPage={setPage} />}
        </div>
    )
}

export default Manga
