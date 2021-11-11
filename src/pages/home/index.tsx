import Seo from '../../components/Seo';
import AnimeRec from './components/AnimeRec';
import MangaRec from './components/MangaRec';
import UpcomingAnime from './components/UpcomingAnime';

const Home = () => {
	return (
		<div className='mt-6 lg:w-5/6 w-full'>
			<Seo
				title='Aninews'
				description='Find Your Best Anime And Manga'
				image='aninews.svg'
			/>
			<UpcomingAnime />
			<AnimeRec />
			<MangaRec />
		</div>
	);
};

export default Home;
