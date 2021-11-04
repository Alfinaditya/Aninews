import React, { useState } from 'react';
import Header from './components/Header';
import Pagination from '../../components/Pagination';
import DataSearchBody from '../../components/DataSearchBody';
import { useQuery } from 'react-query';
import { MediaList } from '../../ts/media';
import { mangaList } from '../../api/manga';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/outline';
import Loading from '../../components/Loading';
interface Props {
	input: string;
}
const Manga: React.FC<Props> = ({ input }) => {
	const [page, setPage] = useState(0);
	const [selectedStatusValue, setSelectedStatusValue] = useState('manga');
	const [selectedStatusText, setSelectedStatusText] = useState('Manga');
	console.log('re render');
	const { isLoading, isError, data, error } = useQuery<MediaList[], Error>(
		['mangaList', selectedStatusValue],
		() => mangaList(page, selectedStatusValue),
		{ refetchIntervalInBackground: false, refetchOnWindowFocus: false }
		// { enabled: false }
	);
	if (isLoading) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;
	// CUSTOM URL
	// const MANGA_URL = `https://api.jikan.moe/v3/top/manga/${page + 1}/${select}`;
	// const SEARCH_MANGA = `https://api.jikan.moe/v3/search/manga?q=${input}&type=${select}&order_by=title&page=${
	// 	page + 1
	// }`;

	// // CUSTOM HOOK
	// const { data } = FetchData(MANGA_URL, page);
	// const { searchData } = FetchSearchData(SEARCH_MANGA, input);
	// console.log(data);

	// const listManga = data.top;

	return (
		<div className='lg:w-5/6 md:w-full'>
			<Header
				setSelectedStatusValue={setSelectedStatusValue}
				selectedStatusText={selectedStatusText}
				setSelectedStatusText={setSelectedStatusText}
			/>
			{/* <DataSearchBody shows={searchData} />
			<DataBody shows={listManga} />
			{listManga && listManga.length >= 50 && (
				<Pagination data={listManga} page={page} setPage={setPage} />
			)} */}
			<div className='mt-8 justify-center grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3'>
				{data &&
					data.map((manga: MediaList) => (
						<Link
							to={`manga/${manga.mal_id}`}
							className='w-48 mb-10 mx-3'
							key={manga.mal_id}
						>
							<div className='w-48 h-48'>
								<img
									src={manga.image_url}
									className='w-full h-full shadow-lg hover:shadow-xl'
									alt={manga.title}
								></img>
							</div>
							{/* 23 === words length on the first line */}
							{manga.title.length > 23 ? (
								<p className='mt-6 font-bold w-48 h-12 overflow-hidden overflow-ellipsis '>
									{manga.title}
								</p>
							) : (
								<p className='mt-6 font-bold'>{manga.title}</p>
							)}
							<p className='mt-2 font-normal'>
								{manga.start_date} -{' '}
								{manga.end_date === null ? 'Airing' : manga.end_date}
							</p>
							<div className='mt-2 text-main font-bold flex items-center'>
								<StarIcon className='w-5 h-5' />
								<p className='ml-2'>{manga.score}</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Manga;
