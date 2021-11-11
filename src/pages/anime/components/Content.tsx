import { StarIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { MediaList } from '../../../ts/media';
import Color from 'color-thief-react';

interface Props {
	animeList: MediaList;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	isPreviousData: boolean;
}

const Content: React.FC<Props> = ({
	animeList,
	page,
	setPage,
	isPreviousData,
}) => {
	return (
		<>
			<div className='mt-8 2xl:grid-cols-6 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:place-items-start place-items-center'>
				{animeList &&
					animeList.top.map(anime => (
						<Link
							to={`anime/${anime.mal_id}`}
							className='lg:w-48 sm:w-48 md:w-56 w-36 mb-10'
							key={anime.mal_id}
						>
							<Color src={anime.image_url} crossOrigin='anonymous' format='hex'>
								{({ data, loading }) => {
									if (loading)
										return (
											<div className='lg:w-48 lg:h-48 md:w-56 sm:w-48 sm:h-52 w-36 h-40' />
										);
									return (
										<div
											style={{ backgroundColor: data }}
											className='lg:w-48 lg:h-48 md:w-56 sm:w-48 sm:h-52 w-36 h-40'
										>
											<img
												src={anime.image_url}
												className='w-full h-full shadow-lg hover:shadow-xl'
												alt={anime.title}
											/>
										</div>
									);
								}}
							</Color>
							<div className='lg:w-48 sm:w-48 md:w-56 w-36'>
								<p className='mt-6 font-bold w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
									{anime.title}
								</p>
								<p className='mt-2 font-normal w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
									{anime.start_date} -{' '}
									{anime.end_date === null ? 'Airing' : anime.end_date}
								</p>
								<div className='mt-2 text-main font-bold flex items-center'>
									<StarIcon className='w-5 h-5' />
									<p className='ml-2'>{anime.score}</p>
								</div>
							</div>
						</Link>
					))}
			</div>
			<div className='lg:mb-0 mb-28'>
				{page > 0 && (
					<button
						onClick={() => {
							setPage(old => Math.max(old - 1, 0));
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
						disabled={page === 0}
					>
						Previous Page
					</button>
				)}
				<div>{page + 1}</div>
				<button
					onClick={() => {
						if (!isPreviousData) {
							setPage(old => old + 1);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}
					}}
					// Disable the Next Page button until we know a next page is available
					disabled={isPreviousData}
				>
					Next Page
				</button>
			</div>
		</>
	);
};

export default Content;
