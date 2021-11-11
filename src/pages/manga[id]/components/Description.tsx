import React from 'react';
import { Details } from '../../../ts/manga';
interface Props {
	manga: Details;
}
const Description: React.FC<Props> = ({ manga }) => {
	const informationLeft = [
		{
			property: 'Japanese',
			value: manga?.title_japanese,
		},
		{
			property: 'Type',
			value: manga?.type,
		},
		{
			property: 'Status',
			value: manga?.status,
		},
		{
			property: 'Premiered',
			value: manga?.published.string,
		},
	];
	const informationRight = [
		{
			property: 'Score',
			value: manga?.score,
		},
		{
			property: 'Volumes',
			value: manga?.volumes,
		},
		{
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
