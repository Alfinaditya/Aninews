import MainHome from './Components/Home/MainHome';
import Navbar from './Components/Home/Navbar';
import SearchHeader from './Components/Home/SearchHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App font-quicksand max-w-screen-xl m-auto'>
      <Router>
        <SearchHeader />
        <Switch>
          <div className='mt-12 flex justify-between'>

            <Navbar />
            <Route exact path='/'>
              <MainHome />
            </Route>
            <Route path='/anime'>
              <p>Hallo Anime</p>
            </Route>
            <Route path='/news'>
              <p>Hallo News</p>
            </Route>
            <Route path='/about-us'>
              <p>Hallo About us</p>
            </Route>

          </div>
        </Switch>
      </Router>
    </div >

  );
}

export default App;
