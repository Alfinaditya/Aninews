import { Link } from 'react-router-dom';

const AnimeRec = () => {
	const ANIME_URL = 'https://api.jikan.moe/v3/anime/1/recommendations';
	// const { data } = FetchData(ANIME_URL)
	// const listAnime = data.recommendations
	return (
		<div className='mt-12 mb-20'>
			{/* {.length > 0 && console.log(data.recommendations)} */}
			{/* <p className='font-bold text-xl sm:text-left  text-center'>Anime <span className='text-main'>recommendations</span></p>
            <div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mt-8'>
                {listAnime && listAnime.slice(0, 15).map((anime) => (
                    <Link to={`anime/${anime.mal_id}`} key={anime.mal_id} className='w-48 mb-10 mx-3 cursor-pointer'>
                        <img className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl' src={anime.image_url} alt='' />
                        <p className='mt-6 font-bold'>{anime.title}</p>
                    </Link>
                ))}
            </div> */}
			<Link to='/anime'>
				<p className='text-main rounded font-medium text-lg underline'>
					More anime...
				</p>
			</Link>
		</div>
	);
};

export default AnimeRec;
