import AnimeRec from './components/AnimeRec'
import MangaRec from './components/MangaRec'
import UpcomingAnime from './components/UpcomingAnime'

const Home = () => {
    return (
        <div className='mt-6 lg:w-5/6 w-full'>
            {/* Upcoming Anime */}
            <UpcomingAnime />
            {/* Anime Recommendations */}
            <AnimeRec />
            {/* Manga Recommendations */}
            <MangaRec />

        </div>
    )
}

export default Home
