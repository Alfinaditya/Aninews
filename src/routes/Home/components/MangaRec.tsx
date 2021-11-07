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
		<div className='mt-12 mb-10'>
			<h1 className='font-bold text-xl sm:text-left text-center'>
				Manga <span className='text-main'>recommendations</span>
			</h1>
			{isLoading ? (
				<RecLoading />
			) : (
				<>
					<div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mt-8'>
						{data &&
							data.recommendations.slice(0, 10).map(manga => (
								<Link
									to={`manga/${manga.mal_id}`}
									key={manga.mal_id}
									className='w-48 mb-10 mx-3 cursor-pointer'
								>
									<div className='w-48 h-48'>
										<img
											src={manga.image_url}
											className='w-full h-full shadow-lg hover:shadow-xl'
											alt={manga.title}
										></img>
									</div>
									<p className='mt-6 font-bold'>{manga.title}</p>
								</Link>
							))}
					</div>
					<Link to='/anime'>
						<p className='text-main rounded font-medium text-lg underline'>
							More manga...
						</p>
					</Link>
				</>
			)}
		</div>
	);
};

export default MangaRec;
