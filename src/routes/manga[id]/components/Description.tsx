import React from 'react';
import { Details } from '../../../ts/manga';
interface Props {
	manga: Details;
}
const Description: React.FC<Props> = ({ manga }) => {
	const informationLeft = [
		{
			id: 1,
			property: 'Japanese',
			value: manga?.title_japanese,
		},
		{
			id: 2,
			property: 'Type',
			value: manga?.type,
		},
		{
			id: 3,
			property: 'Status',
			value: manga?.status,
		},
		{
			id: 4,
			property: 'Premiered',
			value: manga?.published.string,
		},
	];
	const informationRight = [
		{
			id: 1,
			property: 'Score',
			value: manga?.score,
		},
		{
			id: 2,
			property: 'Volumes',
			value: manga?.volumes,
		},
		{
			id: 3,
			property: 'Chapters',
			value: manga?.chapters,
		},
	];
	return (
		<div className='lg:w-3/5 sm:w-full'>
			<h1 className='font-quicksand font-medium text-3xl'>{manga!.title}</h1>

			{/*Manga Synopsis  */}
			<p className='font-roboto font-light mt-3'>{manga!.synopsis}</p>

			{/* Manga information */}
			<div className='my-9 flex md:justify-between md:flex-row flex-col'>
				<div>
					{informationLeft.map(information => (
						<p key={information.id} className='mb-1'>
							<span className='font-bold text-main'>
								{information.property} :{' '}
							</span>
							{information.value}
						</p>
					))}
				</div>
				<div>
					{informationRight.map(information => (
						<p key={information.id} className='mb-1'>
							<span className='font-bold text-main'>
								{information.property} :{' '}
							</span>
							{information.value}
						</p>
					))}
				</div>
			</div>
			{/* Manga Genres */}
			<div className='mt-4 flex flex-wrap pb-9'>
				{manga?.genres.map(genre => (
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
