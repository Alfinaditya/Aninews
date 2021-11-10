import React from 'react';
import { Details } from '../../../ts/anime';
interface Props {
	anime: Details;
}
const Description: React.FC<Props> = ({ anime }) => {
	const informationLeft = [
		{
			property: 'Japanese',
			value: anime?.title_japanese,
		},
		{
			property: 'Type',
			value: anime?.type,
		},
		{
			property: 'Status',
			value: anime?.status,
		},
		{
			property: 'Premiered',
			value: anime?.premiered,
		},
	];
	const informationRight = [
		{
			property: 'Score',
			value: anime?.score,
		},
		{
			property: 'Episodes',
			value: anime?.episodes,
		},
		{
			property: 'Rating',
			value: anime?.rating,
		},
		{
			property: 'Duration',
			value: anime?.duration,
		},
	];
	return (
		<div className='lg:w-3/5 md:w-full'>
			<h1 className='font-quicksand font-medium text-3xl'>{anime!.title}</h1>
			<iframe
				src={anime?.trailer_url}
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title={anime!.title}
				className='m-auto my-8 w-full h-96'
			/>
			{/*Anime Synopsis  */}
			<p className='font-roboto font-light mt-3'>{anime!.synopsis}</p>

			{/* Anime Information*/}
			<div className='my-9 flex md:justify-between md:flex-row flex-col '>
				<div>
					{informationLeft.map((information, i) => (
						<p key={i} className='mb-1'>
							<span className='font-bold text-main'>
								{information.property} :{' '}
							</span>
							{information.value}
						</p>
					))}
				</div>
				<div>
					{informationRight.map((information, i) => (
						<p key={i} className='mb-1'>
							<span className='font-bold text-main'>
								{information.property} :{' '}
							</span>
							{information.value}
						</p>
					))}
				</div>
			</div>

			{/* Anime Genres */}
			<div className='mt-4 flex flex-wrap pb-9 '>
				{anime!.genres &&
					anime!.genres.map(genre => (
						<div
							key={genre.mal_id}
							className='bg-main p-1 px-4 mr-1 rounded-full text-white mb-2'
						>
							{genre.name}
						</div>
					))}
			</div>
		</div>
	);
};

export default Description;
