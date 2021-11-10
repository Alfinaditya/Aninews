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
			<div className='mt-8 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:place-items-start place-items-center'>
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
								className='lg:w-48 sm:w-48 md:w-56 w-36 mb-10 bg-green-700'
								key={anime.mal_id}
							>
								<div className='lg:w-48 lg:h-48 md:w-56 sm:w-48 sm:h-52 w-36 h-40'>
									<img
										src={anime.image_url}
										className='w-full h-full shadow-lg hover:shadow-xl'
										alt={anime.title}
									/>
								</div>
								<div className='lg:w-48 sm:w-48 md:w-56 w-36 bg-blue-500'>
									<p className='mt-6 font-bold w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
										{anime.title}
									</p>
									<p className='mt-2 font-normal w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
										{`${start_date_month} ${start_date_year}`} -
										{anime.end_date === null
											? 'Airing'
											: ` ${end_date_month} ${end_date_year}`}
									</p>
									<div className='mt-2 text-main font-bold flex items-center'>
										<StarIcon className='w-5 h-5' />
										<p className='ml-2'>{anime.score}</p>
									</div>
								</div>
							</Link>
						);
					})}
			</div>
			{animeListQuery && animeListQuery.results.length >= 50 && (
				<div className='lg:mb-0 mb-28'>
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
				</div>
			)}
		</>
	);
};

export default QueryContent;
