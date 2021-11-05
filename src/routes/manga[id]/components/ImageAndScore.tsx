import React from 'react';
import { useHistory } from 'react-router';
import { Details } from '../../../ts/manga';

interface Props {
	manga: Details | undefined;
}
const ImagesAndScore: React.FC<Props> = ({ manga }) => {
	const history = useHistory();
	return (
		<div className='mb-13'>
			<div className='w-80 h-96'>
				<img
					src={manga!.image_url}
					alt={manga?.title}
					className='w-full h-full'
				/>
			</div>
			<div className='w-72 rounded-xl '>
				<div className='bg-main text-white text-lg font-medium p-1 rounded-xl text-center mt-3'>
					Score
				</div>
				<p className='text-center font-bold text-4xl mt-3'>{manga!.score}</p>
			</div>
			<p
				onClick={() => {
					history.go(-1);
				}}
				className='decoration cursor-pointer'
			>
				Back
			</p>
		</div>
	);
};

export default ImagesAndScore;
