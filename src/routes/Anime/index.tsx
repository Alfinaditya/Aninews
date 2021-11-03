import React, { useState } from 'react';
import Header from './components/Header';
import Pagination from '../../components/Pagination';
import DataSearchBody from '../../components/DataSearchBody';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { MediaList } from '../../ts/media';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/outline';
import { animeList } from '../../api/anime';

interface Props {
	input: string;
}
const Anime: React.FC<Props> = ({ input }) => {
	const [page, setPage] = useState(0);
	const [select, setSelect] = useState('airing');

	// async function animeList() {
	// 	try {
	// 		const res = await axios.get(
	// 			`https://api.jikan.moe/v3/top/anime/${page + 1}/${select}`
	// 		);
	// 		return res.data.top;
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }
	// URL
	let SEARCH_ANIME;
	if (select === 'airing' || select === 'upcoming') {
		SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&status=${select}g&order_by=title`;
	} else {
		SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&type=${select}&order_by=title`;
	}

	// Custom Hook
	// const { data } = FetchData(ANIME_URL, page);
	const { isLoading, isError, data, error } = useQuery<MediaList[], Error>(
		'animeList',
		() => animeList(page, select)
	);
	if (isLoading) return <p>Loading....</p>;
	if (isError) return <p>Something Went Wrong....</p>;
	if (data) console.log(data);
	// const { searchData } = FetchSearchData(SEARCH_ANIME, input);
	// // list Anime Body

	return (
		<div className='lg:w-5/6 sm:w-full'>
			<Header select={select} setSelect={setSelect} />
			<div className='mt-8 justify-center grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3'>
				{data &&
					data.map((anime: MediaList) => (
						<Link
							to={`anime/${anime.mal_id}`}
							className='w-48 mb-10 mx-3'
							key={anime.mal_id}
						>
							<div className='w-48 h-48'>
								<img
									src={anime.image_url}
									className='w-full h-full shadow-lg hover:shadow-xl '
									alt={anime.title}
								/>
							</div>
							<p className='mt-6 font-bold'>{anime.title}</p>
							<p className='mt-2 font-normal'>
								{anime.start_date} -{' '}
								{anime.end_date === null ? 'Airing' : anime.end_date}
							</p>
							<div className='mt-2 text-main font-bold flex items-center'>
								<StarIcon className='w-5 h-5' />
								<p className='ml-2'>{anime.score}</p>
							</div>
						</Link>
					))}
			</div>
			{/* <DataSearchBody shows={searchData} /> */}

			{/* if array search data less than one or null */}
			{/* {searchData && searchData.length < 1 && (
				<>
					<DataBody shows={listAnime} />
					{listAnime && listAnime.length >= 50 && (
						<Pagination data={listAnime} page={page} setPage={setPage} />
					)}
				</>
			)} */}
		</div>
	);
};

export default Anime;
