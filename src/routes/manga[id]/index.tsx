import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { mangaId } from '../../api/manga';
import { Details } from '../../ts/manga';
import Description from './components/Description';
import ImagesAndScore from './components/ImageAndScore';

const MangaDetails = () => {
	const { id } = useParams() as any;
	// const MANGA_URL = `https://api.jikan.moe/v3/manga/${id}`
	// const { data, loading } = FetchData(MANGA_URL)
	// const manga = data

	const { isLoading, isError, data } = useQuery<Details, Error>(
		'mangaId',
		() => mangaId(id),
		{ cacheTime: 0 }
	);
	if (isLoading) return <p>Loading....</p>;
	if (isError) return <p>Something Went Wrong....</p>;
	if (data) console.log(data);
	return (
		<div className='max-w-6xl px-4'>
			<div className='flex lg:justify-between flex-wrap justify-center'>
				<ImagesAndScore manga={data} />
				<Description manga={data} />
			</div>
		</div>
	);
};

export default MangaDetails;
