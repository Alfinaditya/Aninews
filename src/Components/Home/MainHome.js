import { useState } from 'react'
import FetchAnimeRecommend from '../../hooks/FetchAnimeRecommend'
import FetchMangaRecommend from '../../hooks/FetchMangaRecommend'
const MainHome = () => {
    const [animes, setAnimes] = useState('')
    const [mangas, setMangas] = useState('')
    FetchAnimeRecommend(setAnimes)
    FetchMangaRecommend(setMangas)
    return (
        <div className='mt-6'>
            {/* Main Image */}
            <div className='w-full h-56 bg-pink-250 m-auto rounded-xl'>
                <span>Aninews</span>
            </div>

            {/* Anime Recommendations */}
            <div className='mt-12'>
                <p className='font-bold text-xl'>Anime recommendations</p>
                <div className='flex mt-5 flex-wrap'>
                    {animes && animes.map((anime) => (
                        <a>
                            <img className='w-52 h-36 rounded-sm mx-2' src={anime.image_url} alt='' />
                            <p className=' ml-3 mt-6 font-bold'>{anime.title}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* Manga Recommendations */}
            <div className='mt-12 mb-56'>
                <p className='font-bold text-xl'>Manga recommendations</p>
                <div className='flex mt-5 flex-wrap'>
                    {mangas && mangas.map((manga) => (
                        <a>
                            <img className='w-52 h-36 rounded-sm mx-2 shadow-lg hover:shadow-xl' src={manga.image_url} alt='' />
                            <p className=' ml-3 mt-6 font-bold'>{manga.title}</p>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default MainHome
