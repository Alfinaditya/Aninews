import { StarIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { MediaList } from '../../../ts/media';

interface Props {
	animeList: MediaList[];
}

const Content: React.FC<Props> = ({ animeList }) => {
	return (
		<div className='mt-8 justify-center grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3'>
			{animeList &&
				animeList.map((anime: MediaList) => (
					<Link
						to={`anime/${anime.mal_id}`}
						className='w-48 mb-10 mx-3'
						key={anime.mal_id}
					>
						<div className='w-48 h-48'>
							<img
								src={anime.image_url}
								className='w-full h-full shadow-lg hover:shadow-xl '
								alt={anime.title}
							/>
						</div>
						{/* 23 === words length on the first line */}
						{anime.title.length > 23 ? (
							<p className='mt-6 font-bold w-48 h-12 overflow-hidden overflow-ellipsis '>
								{anime.title}
							</p>
						) : (
							<p className='mt-6 font-bold'>{anime.title}</p>
						)}
						<p className='mt-2 font-normal'>
							{anime.start_date} -{' '}
							{anime.end_date === null ? 'Airing' : anime.end_date}
						</p>
						<div className='mt-2 text-main font-bold flex items-center'>
							<StarIcon className='w-5 h-5' />
							<p className='ml-2'>{anime.score}</p>
						</div>
					</Link>
				))}
		</div>
	);
};

export default Content;
