import React, { useState } from 'react';
import FetchData from '../../hooks/FetchData';
import FetchSearchData from '../../hooks/FetchSearchData';
import Header from './components/Header';
import Pagination from '../../components/Pagination';
import DataBody from '../../components/DataBody';
import DataSearchBody from '../../components/DataSearchBody';

const Anime = ({ input }) => {
	const [page, setPage] = useState(0);
	const [select, setSelect] = useState('airing');

	// URL
	let SEARCH_ANIME;
	const ANIME_URL = `https://api.jikan.moe/v3/top/anime/${page + 1}/${select}`;
	if (select === 'airing' || select === 'upcoming') {
		SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&status=${select}g&order_by=title`;
	} else {
		SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&type=${select}&order_by=title`;
	}

	// Custom Hook
	const { data } = FetchData(ANIME_URL, page);
	const { searchData } = FetchSearchData(SEARCH_ANIME, input);
	console.log(data);
	// list Anime Body
	const listAnime = data.top;

	return (
		<div className='lg:w-5/6 sm:w-full'>
			<Header select={select} setSelect={setSelect} />
			<DataSearchBody shows={searchData} />

			{/* if array search data less than one or null */}
			{searchData && searchData.length < 1 && (
				<>
					<DataBody shows={listAnime} />
					{listAnime && listAnime.length >= 50 && (
						<Pagination data={listAnime} page={page} setPage={setPage} />
					)}
				</>
			)}
		</div>
	);
};

export default Anime;
