import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	shows: any;
}
const DataSearchBody: React.FC<Props> = ({ shows }) => {
	return (
		<div className='grid justify-center xl:grid-cols-5 lg:grid-cols-4 mt-8 sm:grid-cols-3'>
			{/* {shows && shows.map(show => {
                const path = setPath(show)
                const { start_date_month, end_date_month, start_date_year, end_date_year } = convertIsoDateToDateFormat(show)
                return (
                    <Link to={path} className='w-48 mb-10 mx-3' key={show.mal_id}>
                        <img src={show.image_url} className='w-48 h-36 rounded-sm shadow-lg hover:shadow-xl '></img>
                        <p className='mt-6 font-bold'>{show.title}</p>
                        <p className='mt-2 font-normal'>
                            {`${start_date_month} ${start_date_year}`} -
                            {show.end_date === null ? 'Airing' : ` ${end_date_month} ${end_date_year}`}
                        </p>
                        <p className='mt-2 text-main font-bold'>{show.score}</p>
                    </Link>
                )
            })} */}
		</div>
	);
};

// function setPath(show) {
// 	const animeType = ['TV', 'Movie', 'OVA', 'ONA', 'Special', 'Music'];
// 	const mangaType = ['Manga', 'Novel', 'One', 'Doujinshi', 'Manhwa', 'Manhua'];
// 	if (animeType.includes(show.type)) return `anime/${show.mal_id}`;
// 	if (mangaType.includes(show.type)) return `manga/${show.mal_id}`;
// }

// function convertIsoDateToDateFormat(show) {
// 	const start_date = new Date(show.start_date);
// 	const end_date = new Date(show.end_date);
// 	const start_date_year = start_date.getFullYear();
// 	const end_date_year = end_date.getFullYear();
// 	const start_date_month = convertMonthtoString(start_date.getMonth());
// 	const end_date_month = convertMonthtoString(end_date.getMonth());

// 	return {
// 		start_date_month,
// 		end_date_month,
// 		start_date_year,
// 		end_date_year,
// 	};
// }
// function convertMonthtoString(month) {
// 	const monthNames = [
// 		'Jan',
// 		'Feb',
// 		'Mar',
// 		'Apr',
// 		'May',
// 		'Jun',
// 		'Jul',
// 		'Aug',
// 		'Sep',
// 		'Oct',
// 		'Nov',
// 		'Dec',
// 	];
// 	return monthNames[month];
// }

export default DataSearchBody;
