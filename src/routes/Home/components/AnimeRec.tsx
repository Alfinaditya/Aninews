import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { animeListRecommendations } from '../../../api/anime';
import { MediaRecommendations } from '../../../ts/media';
import RecLoading from './RecLoading';

const AnimeRec = () => {
	const { isLoading, isError, data } = useQuery<MediaRecommendations, Error>(
		'animeListRecommendations',
		animeListRecommendations,
		{ refetchIntervalInBackground: false, refetchOnWindowFocus: false }
	);
	if (isError) return <p>Something Went Wrong....</p>;
	return (
		<div className='mt-12 mb-20'>
			<p className='font-bold text-xl sm:text-left  text-center'>
				Anime <span className='text-main'>recommendations</span>
			</p>
			{isLoading ? (
				<RecLoading />
			) : (
				<>
					<div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mt-8'>
						{data &&
							data.recommendations.slice(0, 10).map(anime => (
								<Link
									to={`anime/${anime.mal_id}`}
									key={anime.mal_id}
									className='w-48 mb-10 mx-3 cursor-pointer'
								>
									<div className='w-48 h-48'>
										<img
											src={anime.image_url}
											className='w-full h-full shadow-lg hover:shadow-xl'
											alt={anime.title}
										></img>
									</div>
									<p className='mt-6 font-bold'>{anime.title}</p>
								</Link>
							))}
					</div>
					<Link to='/anime'>
						<p className='text-main rounded font-medium text-lg underline'>
							More anime...
						</p>
					</Link>
				</>
			)}
		</div>
	);
};

export default AnimeRec;
