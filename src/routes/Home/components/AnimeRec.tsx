import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { animeListRecommendations } from '../../../api/anime';
import { Recommendations } from '../../../ts/media';

const AnimeRec = () => {
	// const ANIME_URL = 'https://api.jikan.moe/v3/anime/1/recommendations';
	// const { data } = FetchData(ANIME_URL)
	// const listAnime = data.recommendations
	const { isLoading, isError, data } = useQuery<Recommendations[], Error>(
		'animeListRecommendations',
		animeListRecommendations
		// { enabled: false }
	);
	if (isLoading) return <p>Loading....</p>;
	if (isError) return <p>Something Went Wrong....</p>;
	return (
		<div className='mt-12 mb-20'>
			{/* {.length > 0 && console.log(data.recommendations)} */}
			<p className='font-bold text-xl sm:text-left  text-center'>
				Anime <span className='text-main'>recommendations</span>
			</p>
			<div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mt-8'>
				{data &&
					data.map(anime => (
						<Link
							to={`anime/${anime.mal_id}`}
							key={anime.mal_id}
							className='w-48 mb-10 mx-3 cursor-pointer'
						>
							<div className='w-48 h-48'>
								<img
									src={anime.image_url}
									className='w-full h-full shadow-lg hover:shadow-xl '
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
		</div>
	);
};

export default AnimeRec;
