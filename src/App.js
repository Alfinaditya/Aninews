import Home from './routes/Home';
import Navbar from './components/Navbar';
import SearchHeader from './components/SearchHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Anime from './routes/Anime';
import { useState } from 'react';
import Manga from './routes/Manga';
import AnimeDetails from './routes/AnimeDetails';
import MangaDetails from './routes/MangaDetails';
import AboutUs from './routes/AboutUs';

function App() {
  const [input, setInput] = useState('')
  // Hamburger Menu
  const [open, setOpen] = useState(true)
  return (
    <div className='App font-quicksand max-w-screen-xl m-auto'>
      <Router>
        <SearchHeader input={input} setInput={setInput} setOpen={setOpen} open={open} />
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
            <Route path='/about-us'>
              <AboutUs />
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
    </div >

  );
}

export default App;
