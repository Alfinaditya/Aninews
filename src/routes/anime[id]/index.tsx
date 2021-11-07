import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { animeId } from '../../api/anime/animeId';
import Loading from '../../components/Loading';
import { Details } from '../../ts/anime';
import Description from './components/Description';
import DetailsAndScore from './components/DetailsAndScore';

const AnimeDetails = () => {
	const { id } = useParams() as any;
	const { isLoading, isError, data } = useQuery<Details, Error>(
		'animeId',
		() => animeId(id),
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
			<div className='flex lg:justify-between flex-wrap justify-center'>
				{data && (
					<>
						<DetailsAndScore anime={data} />
						<Description anime={data} />
					</>
				)}
			</div>
		</div>
	);
};

export default AnimeDetails;
