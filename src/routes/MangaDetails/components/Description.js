import React from 'react'

const MangaDescriptions = ({ manga }) => {
    return (
        <div className='w-3/5'>

            <h1 className='font-quicksand font-medium text-3xl'>{manga.title}</h1>


            {/*Manga Synopsis  */}
            <p className='font-roboto font-light mt-3'>{manga.synopsis}</p>

            {/* Manga Category */}
            <div className='my-9 flex justify-between'>
                <div>
                    <p><span className='font-bold text-main'>Japanese : </span>{manga.title_japanese}</p>
                    <p><span className='font-bold text-main'>Type : </span>{manga.type}</p>
                    <p><span className='font-bold text-main'>Status : </span>{manga.status}</p>
                    {/* <p><span className='font-bold text-main'>Premiered : </span>{manga.published.string}</p> */}
                </div>
                <div>
                    <p><span className='font-bold text-main'>Score : </span>{manga.score}</p>
                    <p><span className='font-bold text-main'>Volumes : </span>{manga.volumes}</p>
                    <p><span className='font-bold text-main'>Chapters : </span>{manga.chapters}</p>
                </div>

            </div>

            {/* Manga Genres */}
            <div className='mt-4 flex flex-wrap pb-9'>
                {manga.genres && manga.genres.map(genre => (
                    <div key={genre.mal_id} className='bg-main p-1 px-4 mr-1 rounded-full text-white mb-2'>{genre.name}</div>
                ))}
            </div>
        </div>
    )
}

export default MangaDescriptions
