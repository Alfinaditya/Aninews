import AnimeRec from "./AnimeRec"
import MangaRec from "./MangaRec"

const MainHome = () => {
    return (
        <div className='mt-6'>
            {/* Main Image */}
            <div className='w-full h-56 bg-pink-250 m-auto rounded-xl'>
                <span>Aninews</span>
            </div>
            {/* Anime Recommendations */}
            <AnimeRec />
            {/* Manga Recommendations */}
            <MangaRec />

        </div>
    )
}

export default MainHome
