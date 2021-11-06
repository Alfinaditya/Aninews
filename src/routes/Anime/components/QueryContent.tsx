import { StarIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { convertIsoDateToDateFormat } from '../../../helpers/convertIsoDateToDateFormat';
import { MediaQuery } from '../../../ts/media';

interface Props {
	animeListQuery: MediaQuery;
	isPreviousDataQuery: boolean;
	pagQuery: number;
	setPageQuery: React.Dispatch<React.SetStateAction<number>>;
}
const QueryContent: React.FC<Props> = ({
	animeListQuery,
	isPreviousDataQuery,
	pagQuery,
	setPageQuery,
}) => {
	console.log(animeListQuery);
	return (
		<>
			<div className='mt-8 justify-center grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3'>
				{animeListQuery &&
					animeListQuery.results.map(anime => {
						const {
							start_date_month,
							end_date_month,
							start_date_year,
							end_date_year,
						} = convertIsoDateToDateFormat(anime);
						return (
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
									{`${start_date_month} ${start_date_year}`} -
									{anime.end_date === null
										? 'Airing'
										: ` ${end_date_month} ${end_date_year}`}
								</p>
								<div className='mt-2 text-main font-bold flex items-center'>
									<StarIcon className='w-5 h-5' />
									<p className='ml-2'>{anime.score}</p>
								</div>
							</Link>
						);
					})}
			</div>
			{animeListQuery && animeListQuery.results.length >= 50 && (
				<>
					{pagQuery > 0 && (
						<button
							onClick={() => {
								setPageQuery(old => Math.max(old - 1, 0));
								window.scrollTo({ top: 0, behavior: 'smooth' });
							}}
							disabled={pagQuery === 0}
						>
							Previous Page
						</button>
					)}
					<div>{pagQuery + 1}</div>
					{animeListQuery.last_page !== pagQuery + 1 && (
						<button
							onClick={() => {
								if (!isPreviousDataQuery) {
									setPageQuery(old => old + 1);
									window.scrollTo({ top: 0, behavior: 'smooth' });
								}
							}}
							// Disable the Next Page button until we know a next page is available
							disabled={isPreviousDataQuery}
						>
							Next Page
						</button>
					)}
				</>
			)}
		</>
	);
};

export default QueryContent;
