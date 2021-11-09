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
import DetailsAndScore from './components/DetailsAndScore';
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
		<div className='max-w-6xl px-4'>
			<button
				className='flex items-center mb-6'
				onClick={() => history.push('/manga')}
			>
				<ChevronLeftIcon className='w-8 h-8' />
				<span className='font-semibold'>Back</span>
			</button>
			<div className='flex lg:justify-between flex-wrap justify-center'>
				{data && (
					<>
						<DetailsAndScore anime={data} />
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
