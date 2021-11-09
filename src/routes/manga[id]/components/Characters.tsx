import React, { useState } from 'react';
import { MangaCharacters } from '../../../ts/mangaCharacters';
interface Props {
	dataCharacters: MangaCharacters;
}
const Characters: React.FC<Props> = ({ dataCharacters }) => {
	const charactersToShow = 10;
	const [loadMore, setLoadMore] = useState(charactersToShow);
	let charactersAvailable = dataCharacters.characters.length - loadMore;

	return (
		<div className='my-12 m-auto'>
			<h1 className='font-bold text-2xl'>Characters</h1>
			<div className='flex flex-wrap mb-6 mt-8'>
				{dataCharacters &&
					dataCharacters.characters.slice(0, loadMore).map(character => (
						<div key={character.mal_id} className='w-full sm:w-48 mb-6 m-auto'>
							<div className='sm:h-60 h-96 sm:bg-blue-400 sm:w-48'>
								<img
									loading='lazy'
									className='w-full h-full hover:shadow-lg'
									src={character.image_url}
									alt={character.name}
								/>
							</div>
							<div className='w-48'>
								<p className='font-bold mt-3'>{character.name}</p>
								<p>{character.role}</p>
							</div>
						</div>
					))}
				{dataCharacters.characters.length <= 10 ? (
					<></>
				) : (
					<div className='block w-full'>
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
		</div>
	);
};

export default Characters;
