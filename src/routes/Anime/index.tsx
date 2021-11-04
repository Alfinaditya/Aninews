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
import Loading from '../../components/Loading';

interface Props {
	input: string;
}
const Anime: React.FC<Props> = ({ input }) => {
	const [page, setPage] = useState(0);
	const [selectedStatusValue, setSelectedStatusValue] = useState('airing');
	const [selectedStatusText, setSelectedStatusText] = useState('Airing');

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
	if (selectedStatusValue === 'airing' || selectedStatusValue === 'upcoming') {
		SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&status=${selectedStatusValue}g&order_by=title`;
	} else {
		SEARCH_ANIME = `https://api.jikan.moe/v3/search/anime?q=${input}&type=${selectedStatusValue}&order_by=title`;
	}

	// Custom Hook
	// const { data } = FetchData(ANIME_URL, page);
	const { isLoading, isError, data } = useQuery<MediaList[], Error>(
		['animeList', selectedStatusValue],
		() => animeList(page, selectedStatusValue),
		{ refetchIntervalInBackground: false, refetchOnWindowFocus: false }
	);
	if (isLoading) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;
	// const { searchData } = FetchSearchData(SEARCH_ANIME, input);
	// // list Anime Body
	return (
		<div className='lg:w-5/6 sm:w-full'>
			<Header
				selectedStatusValue={selectedStatusValue}
				setSelectedStatusValue={setSelectedStatusValue}
				selectedStatusText={selectedStatusText}
				setSelectedStatusText={setSelectedStatusText}
			/>
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
							{/* 23 === words length on the first line */}
							{anime.title.length > 23 ? (
								<p className='mt-6 font-bold w-48 h-12 overflow-hidden overflow-ellipsis '>
									{anime.title}
								</p>
							) : (
								<p className='mt-6 font-bold'>{anime.title}</p>
							)}
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
