import React from 'react'

const DataBody = ({ shows }) => {
    return (
        <div className='grid grid-cols-5 mt-8'>
            {shows && shows.map(show => (
                <a className='w-48 mb-10 mx-3' key={show.mal_id}>
                    <img src={show.image_url} className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl '></img>
                    <p className='mt-6 font-bold'>{show.title}</p>
                    <p className='mt-2 font-normal'>
                        {show.start_date} - {show.end_date === null ? 'Airing' : show.end_date}
                    </p>
                    <p className='mt-2 text-main font-bold'>{show.score}</p>
                </a>
            ))}
        </div>
    )
}

export default DataBody
