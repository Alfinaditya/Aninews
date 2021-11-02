import React from 'react';
interface Props {
	select: string;
	setSelect: React.Dispatch<React.SetStateAction<string>>;
}
const Header: React.FC<Props> = ({ select, setSelect }) => {
	return (
		<div className='flex sm:justify-between justify-center flex-wrap lg:mx-6 sm:mx-6'>
			{select === 'airing' || select === 'upcoming' ? (
				<p className='font-bold text-xl'>
					New <span className='text-main'>Releases</span>
				</p>
			) : (
				<p className='font-bold text-xl'>
					Top <span className='text-main'>Anime</span>
				</p>
			)}

			<select
				className='w-80 outline-none font-medium cursor-pointer mt-7 sm:mt-0'
				onChange={e => setSelect(e.target.value)}
			>
				<option value='airing'>Airing</option>
				<option value='upcoming'>Upcoming</option>
				<option value='tv'>TV</option>
				<option value='movie'>Movie</option>
				<option value='ova'>Ova</option>
				<option value='special'>Special</option>
			</select>
		</div>
	);
};

export default Header;
