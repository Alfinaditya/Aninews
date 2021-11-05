import React, { useState } from 'react';
import Header from './components/Header';
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
		isFetching,
		isError,
		isPreviousData,
		data: dataAnimeList,
	} = useQuery<MediaList[], Error>(
		['animeList', selectedStatusValue, page],
		() => animeList(page, selectedStatusValue),
		{
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
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
	if (isFetching) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;
	if (isLoadingQuery) return <Loading />;

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
				<Content
					isPreviousData={isPreviousData}
					page={page}
					setPage={setPage}
					animeList={dataAnimeList!}
				/>
			)}
			{/* {dataAnimeListQuery && dataAnimeListQuery.length >=50 &&( <Pagination data={} page={page} setPage={setPage} />
			)} */}

			{/* if array search data less than one or null */}
			{/* {searchData && searchData.length < 1 && (
				<>
					<DataBody shows={listAnime} />
					{listAnime && listAnime.length >= 50 && (
					)}
				</>
			)} */}
		</div>
	);
};

export default Anime;
