import { BookmarkAltIcon, FilmIcon, HomeIcon } from '@heroicons/react/outline';

const UNVISITED_ICON_STYLE = 'w-6 h-6 lg:text-black text-white';
const VISITED_ICON_STYLE = 'w-6 h-6 lg:text-main text-white';
export const navLinks = [
	{
		text: 'Home',
		path: '/',
		unvisitedIcon: <HomeIcon className={UNVISITED_ICON_STYLE} />,
		visitedIcon: <HomeIcon className={VISITED_ICON_STYLE} />,
	},
	{
		text: 'Anime',
		path: '/anime',
		unvisitedIcon: <FilmIcon className={UNVISITED_ICON_STYLE} />,
		visitedIcon: <FilmIcon className={VISITED_ICON_STYLE} />,
	},
	{
		text: 'Manga',
		path: '/manga',
		unvisitedIcon: <BookmarkAltIcon className={UNVISITED_ICON_STYLE} />,
		visitedIcon: <BookmarkAltIcon className={VISITED_ICON_STYLE} />,
	},
];
