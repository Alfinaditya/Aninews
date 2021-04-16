import './App.css';
import Navbar from './Components/Home/Navbar';
import SearchHeader from './Components/Home/SearchHeader';

function App() {
  return (
    <div className="App font-quicksand max-w-screen-xl m-auto">
      <SearchHeader />
      {/* Dashboard */}
      <div className="mt-5">
        <Navbar />
      </div>
      {/* Dashboard */}
    </div>
  );
}

export default App;
