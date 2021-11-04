import React, { useState } from 'react';
import Header from './components/Header';
import Pagination from '../../components/Pagination';
import { useQuery } from 'react-query';
import { MediaList } from '../../ts/media';
import { mangaList, mangaListQuery } from '../../api/manga';
import Loading from '../../components/Loading';
import Content from './components/Content';
import QueryContent from './components/QueryContent';

interface Props {
	input: string;
}
const Manga: React.FC<Props> = ({ input }) => {
	const [page, setPage] = useState(0);
	const [selectedStatusValue, setSelectedStatusValue] = useState('manga');
	const [selectedStatusText, setSelectedStatusText] = useState('Manga');
	const {
		isLoading,
		isError,
		data: dataMangaList,
	} = useQuery<MediaList[], Error>(
		['mangaList', selectedStatusValue],
		() => mangaList(page, selectedStatusValue),
		{ refetchIntervalInBackground: false, refetchOnWindowFocus: false }
	);
	const { isLoading: isLoadingQuery, data: dataMangaListQuery } = useQuery<
		MediaList[],
		Error
	>(
		['mangaListQuery', input],
		() => mangaListQuery(input, selectedStatusValue, page),
		{
			enabled: !!input,
		}
	);
	if (isLoading) return <Loading />;
	if (isLoadingQuery) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;

	return (
		<div className='lg:w-5/6 md:w-full'>
			<Header
				setSelectedStatusValue={setSelectedStatusValue}
				selectedStatusText={selectedStatusText}
				setSelectedStatusText={setSelectedStatusText}
			/>

			{dataMangaListQuery ? (
				<QueryContent mangaListQuery={dataMangaListQuery!} />
			) : (
				<Content mangaList={dataMangaList!} />
			)}
			{/* <DataSearchBody shows={searchData} />
			<DataBody shows={listManga} />
			{listManga && listManga.length >= 50 && (
				<Pagination data={listManga} page={page} setPage={setPage} />
			)} */}
		</div>
	);
};

export default Manga;
