import React from 'react'

const Description = ({ anime }) => {
    return (
        <div className='lg:w-3/5 md:w-full'>

            <h1 className='font-quicksand font-medium text-3xl'>{anime.title}</h1>
            {/* Anime Video */}
            <iframe
                width="100%"
                height="50%"
                src={anime.trailer_url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={anime.title}
                className='m-auto my-8'
            />

            {/*Anime Synopsis  */}
            <p className='font-roboto font-light mt-3'>{anime.synopsis}</p>

            {/* Anime Category */}
            <div className='my-9 flex justify-between'>
                <div>
                    <p><span className='font-bold text-main'>Japanese : </span>{anime.title_japanese}</p>
                    <p><span className='font-bold text-main'>Type : </span>{anime.type}</p>
                    <p><span className='font-bold text-main'>Status : </span>{anime.status}</p>
                    <p><span className='font-bold text-main'>Premiered : </span>{anime.premiered}</p>
                </div>
                <div>
                    <p><span className='font-bold text-main'>Score : </span>{anime.score}</p>
                    <p><span className='font-bold text-main'>Episodes : </span>{anime.episodes}</p>
                    <p><span className='font-bold text-main'>Rating : </span>{anime.rating}</p>
                    <p><span className='font-bold text-main'>Duration : </span>{anime.duration}</p>
                </div>

            </div>

            {/* Anime Genres */}
            <div className='mt-4 flex flex-wrap pb-9'>
                {anime.genres && anime.genres.map(genre => (
                    <div key={genre.mal_id} className='bg-main p-1 px-4 mr-1 rounded-full text-white mb-2'>{genre.name}</div>
                ))}
            </div>
        </div>
    )
}

export default Description
