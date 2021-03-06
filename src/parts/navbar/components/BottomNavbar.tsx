import { navLinks } from '../utils';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
	return (
		<nav className='lg:hidden bg-main w-full fixed z-10 bottom-0 h-16 flex items-center'>
			<div className='flex justify-between w-11/12 m-auto'>
				{navLinks.map((navLink, i) => (
					<NavLink
						to={navLink.path}
						key={i}
						className='flex flex-col items-center'
					>
						{navLink.unvisitedIcon}
						<p className='text-white'>{navLink.text}</p>
					</NavLink>
				))}
			</div>
		</nav>
	);
};

export default BottomNavbar;
