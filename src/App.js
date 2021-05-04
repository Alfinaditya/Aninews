import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import SearchHeader from './components/Home/SearchHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Anime from './components/Anime/Anime';
import { useState } from 'react';
import Manga from './components/Manga/Manga';
import AnimeDetails from './routes/AnimeDetails';
import MangaDetails from './components/Details/MangaDetails/MangaDetails';
import About from './components/About-us/About';

function App() {
  const [input, setInput] = useState('')
  return (
    <div className='App font-quicksand max-w-screen-xl m-auto'>
      <Router>
        <SearchHeader input={input} setInput={setInput} />
        <Switch>
          <div className='mt-12 flex justify-between'>

            <Navbar />
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
              <About />
            </Route>
            <Route path='/anime/:id'>
              <AnimeDetails />
            </Route>
            <Route path='/manga/:id'>
              <MangaDetails />
            </Route>
          </div>

        </Switch>
      </Router>
    </div >

  );
}

export default App;
