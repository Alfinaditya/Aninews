import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { MediaList } from '../../../ts/media';
import { animeListUpcoming } from '../../../api/anime';
const UpcomingAnime = () => {
	// const UPCOMING_ANIME = 'https://api.jikan.moe/v3/top/anime/1/upcoming';
	// const { data } = FetchData(UPCOMING_ANIME)
	// const listAnime = data.top
	const { isLoading, isError, data } = useQuery<MediaList[], Error>(
		'animeListUpcoming',
		animeListUpcoming
		// { enabled: false }
	);
	if (isLoading) return <p>Loading....</p>;
	if (isError) return <p>Something Went Wrong....</p>;
	return (
		<div>
			<p className='font-bold text-xl md:ml-4 sm:text-left  text-center'>
				<span className='text-main'>Upcoming</span> anime
			</p>
			<div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mt-8'>
				{data &&
					data.map(anime => (
						<Link
							to={`anime/${anime.mal_id}`}
							key={anime.mal_id}
							className='w-48 mb-10 mx-3'
						>
							<div className='w-48 h-48'>
								<img
									src={anime.image_url}
									className='w-full h-full shadow-lg hover:shadow-xl'
									alt={anime.title}
								></img>
							</div>
							<p className='mt-6 font-bold'>{anime.title}</p>
							<p className='mt-2 font-normal'>
								{anime.start_date === null ? '' : anime.start_date} -{' '}
								{anime.end_date === null ? '' : anime.end_date}
							</p>
						</Link>
					))}
			</div>
		</div>
	);
};

export default UpcomingAnime;
