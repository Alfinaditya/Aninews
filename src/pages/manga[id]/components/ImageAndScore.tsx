import React from 'react';
import { Details } from '../../../ts/manga';

interface Props {
	manga: Details;
}
const ImagesAndScore: React.FC<Props> = ({ manga }) => {
	return (
		<div className='mb-13 sm:w-80 w-full'>
			<div className='sm:w-full h-96'>
				<img
					src={manga.image_url}
					alt={manga.title}
					className='w-full h-full'
				/>
			</div>
			<div className='rounded-xl'>
				<div className='bg-main text-white text-lg font-medium p-1 rounded-xl text-center mt-4'>
					Score
				</div>
				<p className='text-center font-bold text-4xl mt-3'>{manga.score}</p>
			</div>
		</div>
	);
};

export default ImagesAndScore;
