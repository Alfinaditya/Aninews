import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { animeListRecommendations } from '../../../api/anime/animeListRecommendations';
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
		<div className='mt-20 mb-20'>
			<h1 className='sm:ml-2 font-bold text-xl sm:text-left text-center'>
				Anime <span className='text-main'>recommendations</span>
			</h1>
			{isLoading ? (
				<RecLoading />
			) : (
				<div>
					<div className='mt-8 2xl:grid-cols-6 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:place-items-start place-items-center'>
						{data &&
							data.recommendations.slice(0, 15).map(anime => (
								<Link
									to={`anime/${anime.mal_id}`}
									key={anime.mal_id}
									className='lg:w-48 sm:w-48 md:w-56 w-36 mb-10 cursor-pointer'
								>
									<div className='lg:w-48 lg:h-48 md:w-56 sm:w-48 sm:h-52 w-36 h-40'>
										<img
											src={anime.image_url}
											className='w-full h-full shadow-lg hover:shadow-xl'
											alt={anime.title}
										></img>
									</div>
									<p className='mt-6 font-bold w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
										{anime.title}
									</p>
								</Link>
							))}
					</div>
					<Link to='/anime'>
						<p className='text-main rounded font-medium text-lg underline ml-2'>
							More anime...
						</p>
					</Link>
				</div>
			)}
		</div>
	);
};

export default AnimeRec;
