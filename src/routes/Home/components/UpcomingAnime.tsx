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
			<h1 className='font-bold text-xl md:ml-4 sm:text-left  text-center'>
				<span className='text-main'>Upcoming</span> anime
			</h1>
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
									{/* 23 === words length on the first line */}
									{anime.title.length > 24 ? (
										<p className='mt-6 font-bold w-48 h-12 overflow-hidden overflow-ellipsis '>
											{anime.title}
										</p>
									) : (
										<p className='mt-6 font-bold'>{anime.title}</p>
									)}
									{/* <p className=' w-48 mt-6 font-bold'>{anime.title}</p> */}
									<div>
										<span>{anime.start_date}</span> {' - '}
										<span>{anime.end_date}</span>
									</div>
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
