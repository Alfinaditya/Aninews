import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline';
import { navLinks } from './utils';

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ open, setOpen }) => {
	const { pathname } = useLocation();
	const animeIdMatch = useRouteMatch('/anime/:id');
	const mangaIdMatch = useRouteMatch('/manga/:id');
	if (animeIdMatch) return <></>;
	if (mangaIdMatch) return <></>;

	return (
		<div
			className={`lg:bg-white bg-main lg:static fixed top-0 h-full sm:w-1/3 w-1/2 lg:w-1/6 lg:block ${
				!open && `hidden`
			}`}
		>
			<nav>
				{/* Hamburger Menu */}
				<XIcon
					onClick={() => {
						setOpen(!open);
					}}
					className='text-white ml-auto mr-7 w-8 h-8 block text-whites mt-6 lg:hidden'
				/>
				<ul className='flex flex-col pt-16 lg:pt-0'>
					{navLinks.map(nav => (
						<li className='text-lg py-5'>
							<Link to={nav.path} className='flex'>
								{pathname === nav.path ? (
									<div className='lg:bg-secondary p-3 rounded-full flex'>
										{nav.visitedIcon}
										<span className='ml-3 lg:text-main text-white'>
											{nav.text}
										</span>
									</div>
								) : (
									<div className='lg:bg-white bg-main p-3 rounded-full flex'>
										{nav.unvisitedIcon}
										<span className='ml-3 lg:text-black text-white'>
											{nav.text}
										</span>
									</div>
								)}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
