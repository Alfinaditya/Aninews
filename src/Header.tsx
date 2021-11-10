import { useRouteMatch, useLocation } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';

interface Props {
	input: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
}
const Header: React.FC<Props> = ({ input, setInput, setOpen, open }) => {
	const [submit, setSubmit] = useState('');
	const { pathname } = useLocation();
	const homeMatch = useRouteMatch('/');
	const animeIdMatch = useRouteMatch('/anime/:id');
	const mangaIdMatch = useRouteMatch('/manga/:id');
	useEffect(() => {
		// clear header when the path change
		setSubmit('');
		setInput('');
	}, [pathname]);
	if (animeIdMatch) return <></>;
	if (mangaIdMatch) return <></>;
	return (
		<div className='mt-7 lg:w-2/3 lg:ml-3 w-full'>
			<div className='flex flex-col lg:justify-between sm:items-center sm:justify-center lg:flex-row'>
				<h1 className='text-3xl text-main font-roboto font-bold lg:mb-0 mb-4 text-center'>
					{' '}
					Aninews
				</h1>
				{!homeMatch?.isExact && (
					<div className='sm:w-1/2 w-4/5 m-auto sm:m-px'>
						<form
							className='flex'
							onSubmit={e => {
								e.preventDefault();
								setInput(submit);
							}}
						>
							<input
								type='search'
								className='p-1 pl-3 sm:w-96 w-full border-1 border-transparant mr-1 rounded-lg font-medium outline-none'
								placeholder='Search something...'
								value={submit}
								onChange={e => setSubmit(e.target.value)}
							/>
							<button
								type='submit'
								className='w-14 h-10 hover:bg-pink-600 rounded-md bg-main flex items-center justify-center'
							>
								<SearchIcon className='h-5 w-5 text-white' />
							</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
