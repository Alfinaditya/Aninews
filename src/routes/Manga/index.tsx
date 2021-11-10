import React, { useState } from 'react';
import Header from './components/Header';
import { useQuery } from 'react-query';
import { MediaList, MediaQuery } from '../../ts/media';
import Loading from '../../components/Loading';
import Content from './components/Content';
import QueryContent from './components/QueryContent';
import { mangaList } from '../../api/manga/mangaList';
import { mangaListQuery } from '../../api/manga/mangaListQuery';

interface Props {
	input: string;
}
const Manga: React.FC<Props> = ({ input }) => {
	const [page, setPage] = useState(0);
	const [pageQuery, setPageQuery] = useState(0);
	const [selectedStatusValue, setSelectedStatusValue] = useState('manga');
	const [selectedStatusText, setSelectedStatusText] = useState('Manga');
	const {
		isLoading,
		isFetching,
		isError,
		isPreviousData,
		data: dataMangaList,
	} = useQuery<MediaList, Error>(
		['mangaList', selectedStatusValue, page],
		() => mangaList(page, selectedStatusValue),
		{ refetchIntervalInBackground: false, refetchOnWindowFocus: false }
	);
	const {
		isFetching: isFetchingQuery,
		isPreviousData: isPreviousDataQuery,
		isLoading: isLoadingQuery,
		data: dataMangaListQuery,
	} = useQuery<MediaQuery, Error>(
		['mangaListQuery', input, pageQuery],
		() => mangaListQuery(input, selectedStatusValue, pageQuery),
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
		<div className='sm:w-full lg:w-5/6 w-11/12 m-auto'>
			<Header
				setSelectedStatusValue={setSelectedStatusValue}
				selectedStatusText={selectedStatusText}
				setSelectedStatusText={setSelectedStatusText}
			/>

			{dataMangaListQuery ? (
				<QueryContent
					isPreviousDataQuery={isPreviousDataQuery}
					mangaListQuery={dataMangaListQuery!}
					pagQuery={pageQuery}
					setPageQuery={setPageQuery}
				/>
			) : (
				<Content
					isPreviousData={isPreviousData}
					page={page}
					setPage={setPage}
					mangaList={dataMangaList!}
				/>
			)}
		</div>
	);
};

export default Manga;
