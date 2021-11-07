import React from 'react';
import { Details } from '../../../ts/anime';
interface Props {
	anime: Details;
}
const Description: React.FC<Props> = ({ anime }) => {
	const informationLeft = [
		{
			id: 1,
			property: 'Japanese',
			value: anime?.title_japanese,
		},
		{
			id: 2,
			property: 'Type',
			value: anime?.type,
		},
		{
			id: 3,
			property: 'Status',
			value: anime?.status,
		},
		{
			id: 4,
			property: 'Premiered',
			value: anime?.premiered,
		},
	];
	const informationRight = [
		{
			id: 1,
			property: 'Score',
			value: anime?.score,
		},
		{
			id: 2,
			property: 'Episodes',
			value: anime?.episodes,
		},
		{
			id: 3,
			property: 'Rating',
			value: anime?.rating,
		},
		{
			id: 4,
			property: 'Duration',
			value: anime?.duration,
		},
	];
	return (
		<div className='lg:w-3/5 md:w-full '>
			<h1 className='font-quicksand font-medium text-3xl'>{anime!.title}</h1>
			<iframe
				width='100%'
				height='400px'
				src={anime?.trailer_url}
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title={anime!.title}
				className='m-auto my-8'
			/>
			{/*Anime Synopsis  */}
			<p className='font-roboto font-light mt-3'>{anime!.synopsis}</p>

			{/* Anime Information*/}
			<div className='my-9 flex justify-between '>
				<div>
					{informationLeft.map(information => (
						<p key={information.id}>
							<span className='font-bold text-main'>
								{information.property} :{' '}
							</span>
							{information.value}
						</p>
					))}
				</div>
				<div>
					{informationRight.map(information => (
						<p key={information.id}>
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
