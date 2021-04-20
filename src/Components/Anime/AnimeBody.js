import React from 'react'

const AnimeBody = ({ listAnime }) => {
    console.log()
    return (
        <div className='grid grid-cols-5 mt-8'>
            {listAnime && listAnime.map(anime => (
                <a className='w-48 mb-10 mx-3' key={anime.mal_id}>
                    <img src={anime.image_url} className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl '></img>
                    <p className='mt-6 font-bold'>{anime.title}</p>
                    <p className='mt-2 font-normal'>
                        {anime.start_date} - {anime.end_date === null ? 'Airing' : anime.end_date}
                    </p>
                    <p className='mt-2 text-main font-bold'>{anime.score}</p>
                </a>
            ))}
        </div>
    )
}

export default AnimeBody
