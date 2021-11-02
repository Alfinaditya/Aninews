import { Link, useLocation } from 'react-router-dom';
import {
	HomeIcon,
	FilmIcon,
	BookmarkAltIcon,
	UserGroupIcon,
	XIcon,
} from '@heroicons/react/outline';

const Navbar = ({ open, setOpen }) => {
	const location = useLocation();

	// conditional rendering,if path location in anime/:id || /manga/:id,then return empty element
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
					<li className='text-lg py-5'>
						<Link to='/' className='flex'>
							{location.pathname === '/' ? (
								<div className='lg:bg-secondary p-3 rounded-full flex'>
									<HomeIcon className='w-6 h-6 lg:text-main text-white' />
									<span className='ml-3 lg:text-main text-white'>Home</span>
								</div>
							) : (
								<div className='lg:bg-white bg-main p-3 rounded-full flex'>
									<HomeIcon className='w-6 h-6 lg:text-black text-white' />
									<span className='ml-3 lg:text-black text-white'>Home</span>
								</div>
							)}
						</Link>
					</li>

					<li className='text-lg py-5'>
						<Link to='/anime' className='flex'>
							{location.pathname === '/anime' ? (
								<div className='lg:bg-secondary p-3 rounded-full flex'>
									<FilmIcon className='w-6 h-6 lg:text-main text-white' />
									<span className='ml-3 lg:text-main text-white'>Anime</span>
								</div>
							) : (
								<div className='lg:bg-white p-3 rounded-full flex'>
									<FilmIcon className='w-6 h-6 lg:text-black text-white' />
									<span className='ml-3 lg:text-black text-white'>Anime</span>
								</div>
							)}
						</Link>
					</li>

					<li className='text-lg py-5'>
						<Link to='/manga' className='flex'>
							{location.pathname === '/manga' ? (
								<div className='lg:bg-secondary p-3 rounded-full flex'>
									<BookmarkAltIcon className='w-6 h-6 lg:text-main text-white' />
									<span className='ml-3 lg:text-main text-white '>Manga</span>
								</div>
							) : (
								<div className='lg:bg-white p-3 rounded-full flex'>
									<BookmarkAltIcon className='w-6 h-6 lg:text-black text-white' />
									<span className='ml-3 lg:text-black text-white'>Manga</span>
								</div>
							)}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
