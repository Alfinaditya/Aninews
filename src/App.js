import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import SearchHeader from './Components/Home/SearchHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Anime from './Components/Anime/Anime';
import { useState } from 'react';
import Manga from './Components/Manga/Manga';
import AnimeDetails from './Components/Details/Anime/AnimeDetails';
import MangaDetails from './Components/Details/Manga/MangaDetails';

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
            <Route path='/news'>
              <p>Hallo </p>
            </Route>
            <Route exact path='/manga'>
              <Manga input={input} />
            </Route>
            <Route path='/about-us'>
              <p>Hallo About us</p>
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
