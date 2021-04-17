import AnimeRec from "./AnimeRec"
import MangaRec from "./MangaRec"
import UpcomingAnime from "./UpcomingAnime"

const MainHome = () => {
    return (
        <div className='mt-6'>
            {/* Upcoming Anime */}
            <UpcomingAnime />
            {/* Anime Recommendations */}
            <AnimeRec />
            {/* Manga Recommendations */}
            <MangaRec />

        </div>
    )
}

export default MainHome
