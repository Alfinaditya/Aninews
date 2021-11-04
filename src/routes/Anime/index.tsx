import React, { useState } from 'react';
import Header from './components/Header';
import Pagination from '../../components/Pagination';
import { useQuery } from 'react-query';
import { MediaList } from '../../ts/media';
import { animeList, animeListQuery } from '../../api/anime';
import Loading from '../../components/Loading';
import QueryContent from './components/QueryContent';
import Content from './components/Content';

interface Props {
	input: string;
}
const Anime: React.FC<Props> = ({ input }) => {
	const [page, setPage] = useState(0);
	const [selectedStatusValue, setSelectedStatusValue] = useState('airing');
	const [selectedStatusText, setSelectedStatusText] = useState('Airing');
	const {
		isLoading,
		isError,
		data: dataAnimeList,
	} = useQuery<MediaList[], Error>(
		['animeList', selectedStatusValue],
		() => animeList(page, selectedStatusValue),
		{ refetchIntervalInBackground: false, refetchOnWindowFocus: false }
	);
	const { isLoading: isLoadingQuery, data: dataAnimeListQuery } = useQuery<
		MediaList[],
		Error
	>(
		['animeListQuery', input],
		() => animeListQuery(input, selectedStatusValue),
		{
			enabled: !!input,
		}
	);
	if (isLoading) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;
	if (isLoadingQuery) return <Loading />;
	// // list Anime Body
	return (
		<div className='lg:w-5/6 sm:w-full'>
			<Header
				selectedStatusValue={selectedStatusValue}
				setSelectedStatusValue={setSelectedStatusValue}
				selectedStatusText={selectedStatusText}
				setSelectedStatusText={setSelectedStatusText}
			/>

			{dataAnimeListQuery ? (
				<QueryContent animeListQuery={dataAnimeListQuery} />
			) : (
				<Content animeList={dataAnimeList!} />
			)}

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
