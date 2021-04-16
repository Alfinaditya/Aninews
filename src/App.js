import MainHome from './Components/Home/MainHome';
import Navbar from './Components/Home/Navbar';
import SearchHeader from './Components/Home/SearchHeader';
import UpcomingAnime from './Components/Home/UpcomingAnime';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App font-quicksand max-w-screen-xl m-auto'>
      <Router>
        <SearchHeader />
        {/* Dashboard */}
        <div className='mt-5 flex justify-between'>
          <Navbar />

          <Switch>
            <Route exact path='/'>
              <MainHome />
              <UpcomingAnime />
            </Route>
            <Route path='/anime'>
              <h2>Hallo Anime</h2>
            </Route>
            <Route path='/news'>
              <h2>Hallo News</h2>
            </Route>
            <Route path='/mangas'>
              <h2>Hallo Manga</h2>
            </Route>
          </Switch>

        </div>
        {/* Dashboard */}
      </Router>
    </div>

  );
}

export default App;
