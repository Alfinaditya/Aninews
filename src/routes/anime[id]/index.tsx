import { ChevronLeftIcon } from '@heroicons/react/outline';
import { useQuery } from 'react-query';
import { useParams, useHistory } from 'react-router-dom';
import { animeId } from '../../api/anime/animeId';
import { animeIdCharacters } from '../../api/anime/animeIdCharacters';
import { animeIdRecommendations } from '../../api/anime/animeIdRecommendations';
import Loading from '../../components/Loading';
import { Details } from '../../ts/anime';
import { AnimeCharacters } from '../../ts/Animecharacters';
import { MediaRecommendations } from '../../ts/media';
import Characters from './components/Characters';
import Description from './components/Description';
import ImageAndScore from './components/ImageAndScore';
import Recommendations from './components/Recommendations';

const AnimeDetails = () => {
	const { id } = useParams() as any;
	const history = useHistory();
	const { isLoading, isError, data } = useQuery<Details, Error>(
		['animeId', id],
		() => animeId(id),
		{
			cacheTime: 0,
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
		}
	);
	const { data: dataCharacters } = useQuery<AnimeCharacters, Error>(
		['animeIdCharacters', id],
		() => animeIdCharacters(id),
		{
			cacheTime: 0,
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
		}
	);
	const { data: dataRecommendations } = useQuery<MediaRecommendations, Error>(
		['animeIdRecommendations', id],
		() => animeIdRecommendations(id),
		{
			cacheTime: 0,
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
		}
	);
	if (isLoading) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;
	return (
		<div className='xl:max-w-6xl w-full m-auto sm:px-4 items-center'>
			<button
				className='flex items-center mb-6'
				onClick={() => history.push('/anime')}
			>
				<ChevronLeftIcon className='w-8 h-8' />
				<span className='font-semibold'>Back</span>
			</button>
			<div className='flex xl:justify-between xl:flex-row flex-wrap flex-col sm:w-full xl:items-stretch items-center px-4'>
				{data && (
					<>
						<ImageAndScore anime={data} />
						<Description anime={data} />
					</>
				)}
			</div>
			{dataCharacters && <Characters dataCharacters={dataCharacters} />}
			{dataRecommendations && (
				<Recommendations dataRecommendations={dataRecommendations} />
			)}
		</div>
	);
};

export default AnimeDetails;
