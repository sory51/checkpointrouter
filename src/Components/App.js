import '../App.css';
import MovieList from './MovieList';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Banner from './Banner';
import { Routes, Route } from "react-router-dom";
import Description from './Desc';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/title/:title' element={<Description />} />
      </Routes>
      <div className='row' >
        <Banner />
      </div>
      <div className='row' >
        <MovieList />
      </div>
    </div>
  );
}

export default App;
