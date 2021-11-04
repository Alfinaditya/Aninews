import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { mangaId } from '../../api/manga';
import Loading from '../../components/Loading';
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
	if (isLoading) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;

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
