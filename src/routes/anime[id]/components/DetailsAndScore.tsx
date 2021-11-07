import React from 'react';
import { useHistory } from 'react-router';
import { Details } from '../../../ts/anime';
interface Props {
	anime: Details;
}
const DetailsAndScore: React.FC<Props> = ({ anime }) => {
	const history = useHistory();
	return (
		<div className='mb-13'>
			<div className='w-80 h-96'>
				<img
					src={anime!.image_url}
					className='w-full h-full'
					alt={anime?.title}
				/>
			</div>
			<div className='rounded-xl'>
				<div className='bg-main text-white text-lg font-medium p-1 rounded-xl text-center mt-3'>
					Score
				</div>
				<p className='text-center font-bold text-4xl mt-3'>{anime!.score}</p>
			</div>
			<p
				onClick={() => {
					history.goBack();
				}}
				className='decoration cursor-pointer'
			>
				Back
			</p>
		</div>
	);
};

export default DetailsAndScore;
