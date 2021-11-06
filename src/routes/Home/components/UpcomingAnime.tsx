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
			<p className='font-bold text-xl md:ml-4 sm:text-left  text-center'>
				<span className='text-main'>Upcoming</span> anime
			</p>
			{isLoading ? (
				<UpcomingLoading />
			) : (
				<>
					<div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mt-8'>
						{data &&
							data.top.slice(0, 10).map(anime => (
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

export default UpcomingAnime;
