import { useRouteMatch } from 'react-router-dom';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import React, { useState } from 'react';

interface Props {
	input: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
}
const Header: React.FC<Props> = ({ input, setInput, setOpen, open }) => {
	const [submit, setSubmit] = useState('');
	const homeMatch = useRouteMatch('/');
	const animeIdMatch = useRouteMatch('/anime/:id');
	const mangaIdMatch = useRouteMatch('/manga/:id');
	if (animeIdMatch) return <></>;
	if (mangaIdMatch) return <></>;
	function handleQuery() {
		// do query here
		// and get the cache on the child component
		// do this on experiment branch
	}
	return (
		<div className='mt-7 lg:w-2/3 lg:ml-3 w-full'>
			<div className='flex flex-row-reverse lg:justify-between sm:items-center sm:justify-center lg:flex-row'>
				<h1 className='text-3xl text-main font-roboto font-bold hidden lg:block'>
					{' '}
					Aninews
				</h1>
				{!homeMatch?.isExact && (
					<div className='sm:w-1/2 w-4/5 m-auto sm:m-px'>
						<form
							onSubmit={e => {
								e.preventDefault();
								setInput(submit);
							}}
						>
							<input
								type='search'
								className='p-1 pl-3 sm:w-96 w-full border-1 border-transparant rounded-lg mr-2 font-medium outline-none'
								placeholder='Search something...'
								value={submit}
								onChange={e => setSubmit(e.target.value)}
							/>
							<button type='submit'>Query</button>
						</form>
					</div>
				)}
				<MenuAlt1Icon
					onClick={() => {
						setOpen(!open);
					}}
					className='w-8 h-8 ml-1 mr-2 block text-main lg:hidden'
				/>
			</div>
		</div>
	);
};

export default Header;
