import { StarIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { MediaList } from '../../../ts/media';
interface Props {
	mangaList: MediaList;
	isPreviousData: boolean;
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}
const Content: React.FC<Props> = ({
	mangaList,
	isPreviousData,
	page,
	setPage,
}) => {
	return (
		<>
			<div className='mt-8 justify-center grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3'>
				{mangaList &&
					mangaList.top.map(manga => (
						<Link
							to={`manga/${manga.mal_id}`}
							className='w-48 mb-10 mx-3'
							key={manga.mal_id}
						>
							<div className='w-48 h-48'>
								<img
									src={manga.image_url}
									className='w-full h-full shadow-lg hover:shadow-xl'
									alt={manga.title}
								></img>
							</div>
							{/* 23 === words length on the first line */}
							{manga.title.length > 23 ? (
								<p className='mt-6 font-bold w-48 h-12 overflow-hidden overflow-ellipsis '>
									{manga.title}
								</p>
							) : (
								<p className='mt-6 font-bold'>{manga.title}</p>
							)}
							<p className='mt-2 font-normal'>
								{manga.start_date} -{' '}
								{manga.end_date === null ? 'Airing' : manga.end_date}
							</p>
							<div className='mt-2 text-main font-bold flex items-center'>
								<StarIcon className='w-5 h-5' />
								<p className='ml-2'>{manga.score}</p>
							</div>
						</Link>
					))}
			</div>
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
		</>
	);
};

export default Content;
