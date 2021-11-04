import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './parts/navbar';
import Header from './Header';
import Anime from './routes/anime';
import AnimeDetails from './routes/anime[id]';
import Home from './routes/home';
import Manga from './routes/manga';
import MangaDetails from './routes/manga[id]';
import ScrolltoTop from '../src/ScrolltoTop';
const Routes = () => {
	// Search Header
	const [input, setInput] = useState('');
	// Hamburger Menu
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Router>
				<ScrolltoTop />
				<Header
					input={input}
					setInput={setInput}
					setOpen={setOpen}
					open={open}
				/>
				<div className='mt-12 flex justify-between'>
					<Navbar open={open} setOpen={setOpen} />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/anime'>
							<Anime input={input} />
						</Route>
						<Route exact path='/manga'>
							<Manga input={input} />
						</Route>
						<Route path='/anime/:id'>
							<AnimeDetails />
						</Route>
						<Route path='/manga/:id'>
							<MangaDetails />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default Routes;
