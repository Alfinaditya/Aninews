import React, { useState } from 'react';
import Header from './components/Header';
import { useQuery } from 'react-query';
import { MediaList } from '../../ts/media';
import Loading from '../../components/Loading';
import QueryContent from './components/QueryContent';
import Content from './components/Content';
import { MediaQuery } from '../../ts/media';
import { animeList } from '../../api/anime/animeList';
import { animeListQuery } from '../../api/anime/animeListQuery';

interface Props {
	input: string;
}
const Anime: React.FC<Props> = ({ input }) => {
	const [page, setPage] = useState(0);
	const [pageQuery, setPageQuery] = useState(0);
	const [selectedStatusValue, setSelectedStatusValue] = useState('airing');
	const [selectedStatusText, setSelectedStatusText] = useState('Airing');
	const {
		isLoading,
		isFetching,
		isError,
		isPreviousData,
		data: dataAnimeList,
	} = useQuery<MediaList, Error>(
		['animeList', selectedStatusValue, page],
		() => animeList(page, selectedStatusValue),
		{
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	const {
		isLoading: isLoadingQuery,
		isFetching: isFetchingQuery,
		isPreviousData: isPreviousDataQuery,
		data: dataAnimeListQuery,
	} = useQuery<MediaQuery, Error>(
		['animeListQuery', input, pageQuery],
		() => animeListQuery(input, selectedStatusValue, pageQuery),
		{
			enabled: !!input,
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
		}
	);
	if (isLoading) return <Loading />;
	if (isFetching) return <Loading />;
	if (isFetchingQuery) return <Loading />;
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
				<QueryContent
					isPreviousDataQuery={isPreviousDataQuery}
					pagQuery={pageQuery}
					setPageQuery={setPageQuery}
					animeListQuery={dataAnimeListQuery}
				/>
			) : (
				<Content
					isPreviousData={isPreviousData}
					page={page}
					setPage={setPage}
					animeList={dataAnimeList!}
				/>
			)}
		</div>
	);
};

export default Anime;
