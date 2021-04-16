import MainHome from './Components/Home/MainHome';
import Navbar from './Components/Home/Navbar';
import SearchHeader from './Components/Home/SearchHeader';
import UpcomingAnime from './Components/Home/UpcomingAnime';

function App() {
  return (
    <div className="App font-quicksand max-w-screen-xl m-auto">
      <SearchHeader />
      {/* Dashboard */}
      <div className="mt-5 flex justify-between">
        <Navbar />
        <MainHome />
        <UpcomingAnime />
      </div>
      {/* Dashboard */}
    </div>
  );
}

export default App;
