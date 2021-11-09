import { navLinks } from '../utils';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
	return (
		<div>
			{navLinks.map((navLink, i) => (
				<Link to={navLink.path} key={i}>
					{navLink.visitedIcon}
					<p>{navLink.text}</p>
				</Link>
			))}
		</div>
	);
};

export default BottomNavbar;
