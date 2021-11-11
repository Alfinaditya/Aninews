import React from 'react';
import { Details } from '../../../ts/anime';

interface Props {
	anime: Details;
}

const ImageAndScore: React.FC<Props> = ({ anime }) => {
	return (
		<div className='mb-13 sm:w-80 w-full'>
			<div className='sm:w-full h-96'>
				<img
					src={anime.image_url}
					className='w-full h-full'
					alt={anime.title}
				/>
			</div>
			<div className='rounded-xl'>
				<div className='bg-main text-white text-lg font-medium p-1 rounded-xl text-center mt-3'>
					Score
				</div>
				<p className='text-center font-bold text-4xl mt-3'>{anime.score}</p>
			</div>
		</div>
	);
};

export default ImageAndScore;
