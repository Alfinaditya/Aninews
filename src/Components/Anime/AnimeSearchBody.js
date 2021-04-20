import React from 'react'


const AnimeSearchBody = ({ searchData }) => {
    return (
        <div className='grid grid-cols-5 mt-8'>
            {searchData && searchData.map(anime => {
                const { start_date_month, end_date_month, start_date_year, end_date_year } = convertIsoDateToDateFormat(anime)
                return (
                    <a className='w-48 mb-10 mx-3' key={anime.mal_id}>
                        <img src={anime.image_url} className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl '></img>
                        <p className='mt-6 font-bold'>{anime.title}</p>
                        <p className='mt-2 font-normal'>
                            {`${start_date_month} ${start_date_year}`} -
                            {anime.end_date === null ? 'Airing' : ` ${end_date_month} ${end_date_year}`}
                        </p>
                        <p className='mt-2 text-main font-bold'>{anime.score}</p>
                    </a>
                )
            })}

        </div>
    )
}

function convertIsoDateToDateFormat(anime) {
    const start_date = new Date(anime.start_date)
    const end_date = new Date(anime.end_date)
    const start_date_year = start_date.getFullYear()
    const end_date_year = end_date.getFullYear()
    const start_date_month = convertMonthtoString(start_date.getMonth())
    const end_date_month = convertMonthtoString(end_date.getMonth())

    return {
        start_date_month,
        end_date_month,
        start_date_year,
        end_date_year
    }
}
function convertMonthtoString(month) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[month]
}

export default AnimeSearchBody
