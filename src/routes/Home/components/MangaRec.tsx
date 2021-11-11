import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { mangaListRecommendations } from '../../../api/manga/mangaListRecommendations';
import { MediaRecommendations } from '../../../ts/media';
import RecLoading from './RecLoading';

const MangaRec = () => {
	const { isLoading, isError, data } = useQuery<MediaRecommendations, Error>(
		'mangaListRecommendations',
		mangaListRecommendations,
		{ refetchIntervalInBackground: false, refetchOnWindowFocus: false }
	);
	if (isError) return <p>Something Went Wrong....</p>;
	return (
		<div className='mt-20 lg:mb-10 mb-32'>
			<h1 className='sm:ml-2 font-bold text-xl sm:text-left text-center'>
				Manga <span className='text-main'>recommendations</span>
			</h1>
			{isLoading ? (
				<RecLoading />
			) : (
				<div>
					<div className='mt-8 2xl:grid-cols-6 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:place-items-start place-items-center'>
						{data &&
							data.recommendations.slice(0, 15).map(manga => (
								<Link
									to={`manga/${manga.mal_id}`}
									key={manga.mal_id}
									className='lg:w-48 sm:w-48 md:w-56 w-36 mb-10 cursor-pointer'
								>
									<div className='lg:w-48 lg:h-48 md:w-56 sm:w-48 sm:h-52 w-36 h-40'>
										<img
											src={manga.image_url}
											className='w-full h-full shadow-lg hover:shadow-xl'
											alt={manga.title}
										></img>
									</div>
									<p className='mt-6 font-bold w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
										{manga.title}
									</p>
								</Link>
							))}
					</div>
					<Link to='/anime'>
						<p className='text-main rounded font-medium text-lg underline ml-2'>
							More manga...
						</p>
					</Link>
				</div>
			)}
		</div>
	);
};

export default MangaRec;
