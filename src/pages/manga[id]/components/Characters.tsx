import React, { useState } from 'react';
import { MangaCharacters } from '../../../ts/mangaCharacters';
import Color from 'color-thief-react';

interface Props {
	dataCharacters: MangaCharacters;
}

const Characters: React.FC<Props> = ({ dataCharacters }) => {
	const charactersToShow = 10;
	const [loadMore, setLoadMore] = useState(charactersToShow);
	let charactersAvailable = dataCharacters.characters.length - loadMore;

	return (
		<div className='my-12'>
			<h1 className='font-bold text-2xl px-4'>Characters</h1>
			<div className='grid xl:grid-cols-5 lg:grid-cols-4 lg:place-items-start place-items-center sm:grid-cols-3 grid-cols-2 mb-6 mt-8'>
				{dataCharacters &&
					dataCharacters.characters.slice(0, loadMore).map(character => (
						<div
							key={character.mal_id}
							className='w-36 md:w-56 lg:w-48 sm:w-48 mb-6'
						>
							<Color
								src={character.image_url}
								crossOrigin='anonymous'
								format='hex'
							>
								{({ data, loading }) => {
									if (loading)
										return (
											<div className='w-36 lg:w-48 sm:h-60 md:w-56 sm:w-48 h-40' />
										);
									return (
										<div
											style={{ backgroundColor: data }}
											className='w-36 lg:w-48 sm:h-60 md:w-56 sm:w-48 bg-main h-40'
										>
											<img
												loading='lazy'
												className='w-full h-full hover:shadow-lg'
												src={character.image_url}
												alt={character.name}
											/>
										</div>
									);
								}}
							</Color>
							<div className='sm:w-48 w-36'>
								<p className='font-bold mt-3 w-full clear-both overflow-hidden overflow-ellipsis whitespace-nowrap'>
									{character.name}
								</p>
								<p>{character.role}</p>
							</div>
						</div>
					))}
			</div>
			{dataCharacters.characters.length <= 10 ? (
				<></>
			) : (
				<div className='block w-full sm:p-0 pr-2'>
					{charactersAvailable >= 0 && (
						<button
							className='ml-auto block text-main hover:text-pink-600 underline'
							onClick={() => {
								setLoadMore(loadMore + 10);
							}}
						>
							Load More
						</button>
					)}
					{charactersAvailable <= 0 && (
						<button
							onClick={() => {
								setLoadMore(10);
								charactersAvailable = dataCharacters.characters.length;
								window.scrollTo({ top: 0, behavior: 'smooth' });
							}}
							className='ml-auto block text-main hover:text-pink-600 underline'
						>
							Show Less
						</button>
					)}
				</div>
			)}
		</div>
	);
};

export default Characters;
