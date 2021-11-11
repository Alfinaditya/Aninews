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
import Seo from '../../components/Seo';

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
	if (isLoadingQuery) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;

	return (
		<div className='w-full lg:w-5/6 m-auto'>
			<Header
				selectedStatusValue={selectedStatusValue}
				setSelectedStatusValue={setSelectedStatusValue}
				selectedStatusText={selectedStatusText}
				setSelectedStatusText={setSelectedStatusText}
			/>

			{dataAnimeListQuery ? (
				<>
					<Seo
						title={input}
						description={`Aninews searched for ${input}`}
						image={dataAnimeList!.top[0].image_url}
					/>
					<QueryContent
						isPreviousDataQuery={isPreviousDataQuery}
						pagQuery={pageQuery}
						setPageQuery={setPageQuery}
						animeListQuery={dataAnimeListQuery}
					/>
				</>
			) : (
				<>
					<Seo
						title='Anime'
						description='Aninews Anime Section'
						image={dataAnimeList!.top[0].image_url}
					/>
					<Content
						isPreviousData={isPreviousData}
						page={page}
						setPage={setPage}
						animeList={dataAnimeList!}
					/>
				</>
			)}
		</div>
	);
};

export default Anime;
