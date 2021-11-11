import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { animeListUpcoming } from '../../../api/anime/animeListUpcoming';
import { MediaList } from '../../../ts/media';
import UpcomingLoading from './UpcomingLoading';

const UpcomingAnime = () => {
	const { isLoading, isError, data } = useQuery<MediaList, Error>(
		'animeListUpcoming',
		animeListUpcoming,
		{ refetchIntervalInBackground: false, refetchOnWindowFocus: false }
	);
	if (isError) return <p>Something Went Wrong....</p>;
	return (
		<div>
			<h1 className='sm:ml-2 font-bold text-xl sm:text-left text-center'>
				<span className='text-main'>Upcoming</span> anime
			</h1>
			{isLoading ? (
				<UpcomingLoading />
			) : (
				<div>
					<div className='mt-8 2xl:grid-cols-6 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:place-items-start place-items-center'>
						{data &&
							data.top.slice(0, 15).map(anime => (
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
									<div className='lg:w-48 sm:w-48 md:w-56 w-36'>
										<p className='mt-6 font-bold w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
											{anime.title}
										</p>
										<div className='mt-2 font-normal w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
											<span>{anime.start_date}</span> {' - '}
											<span>{anime.end_date}</span>
										</div>
									</div>
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

export default UpcomingAnime;
