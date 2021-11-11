import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './parts/navbar';
import Header from './Header';
import Anime from './pages/anime';
import AnimeDetails from './pages/anime[id]';
import Home from './pages/home';
import Manga from './pages/manga';
import MangaDetails from './pages/manga[id]';
import ScrolltoTop from '../src/ScrolltoTop';
import NotFound from './pages/404/index';

const Routes = () => {
	// Search Header
	const [input, setInput] = useState('');
	return (
		<div>
			<Router>
				<ScrolltoTop />
				<Header setInput={setInput} />
				<div className='mt-12 flex justify-between m-auto'>
					<Navbar />
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
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default Routes;
