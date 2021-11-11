import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router';
import { mangaId } from '../../api/manga/mangaId';
import { mangaIdCharacters } from '../../api/manga/mangaIdCharacters';
import { mangaIdRecommendations } from '../../api/manga/mangaIdRecommendations';
import Loading from '../../components/Loading';
import { Details } from '../../ts/manga';
import { MangaCharacters } from '../../ts/mangaCharacters';
import { MediaRecommendations } from '../../ts/media';
import Characters from './components/Characters';
import Description from './components/Description';
import ImagesAndScore from './components/ImageAndScore';
import Recommendations from './components/Recommendations';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import Seo from '../../components/Seo';

const MangaDetails = () => {
	const { id } = useParams() as any;
	const history = useHistory();
	const { isLoading, isError, data } = useQuery<Details, Error>(
		['mangaId', id],
		() => mangaId(id),
		{
			cacheTime: 0,
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
		}
	);
	const { data: dataCharacters } = useQuery<MangaCharacters, Error>(
		['mangaIdCharacters', id],
		() => mangaIdCharacters(id),
		{
			cacheTime: 0,
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
		}
	);
	const { data: dataRecommendations } = useQuery<MediaRecommendations, Error>(
		['mangaIdRecommendations', id],
		() => mangaIdRecommendations(id),
		{
			cacheTime: 0,
			refetchIntervalInBackground: false,
			refetchOnWindowFocus: false,
		}
	);
	if (isLoading) return <Loading />;
	if (isError) return <p>Something Went Wrong....</p>;

	return (
		<div className='xl:max-w-6xl w-full m-auto sm:px-4'>
			<button
				className='flex items-center mb-6 '
				onClick={() => history.push('/manga')}
			>
				<ChevronLeftIcon className='w-8 h-8' />
				<span className='font-semibold'>Back</span>
			</button>
			<div className='flex xl:justify-between xl:flex-row flex-wrap flex-col sm:w-full items-center px-4'>
				{data && (
					<>
						<Seo
							title={data.title}
							description={data.synopsis}
							image={data.image_url}
						/>
						<ImagesAndScore manga={data} />
						<Description manga={data} />
					</>
				)}
			</div>
			{dataCharacters && <Characters dataCharacters={dataCharacters} />}
			{dataRecommendations && (
				<Recommendations recommendations={dataRecommendations} />
			)}
		</div>
	);
};

export default MangaDetails;
