import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { animeId } from '../../api/anime';
import { Details } from '../../ts/anime';
import Description from './components/Description';
import DetailsAndScore from './components/DetailsAndScore';

const AnimeDetails = () => {
	const { id } = useParams() as any;
	// const ANIME_URL = `https://api.jikan.moe/v3/anime/${id}`
	// const { data, loading } = FetchData(ANIME_URL)
	// const anime = data
	const { isLoading, isError, data } = useQuery<Details, Error>(
		'animeId',
		() => animeId(id),
		{ cacheTime: 0 }
	);
	if (isLoading) return <p>Loading....</p>;
	if (isError) return <p>Something Went Wrong....</p>;
	return (
		<div className='max-w-6xl px-4'>
			<div className='flex lg:justify-between flex-wrap justify-center'>
				<DetailsAndScore anime={data} />
				<Description anime={data} />
			</div>
		</div>
	);
};

export default AnimeDetails;
