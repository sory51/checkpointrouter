
import '../App.css';
import MovieList from './MovieList';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Banner from './Banner';
import Search from './Search';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Description from './Desc';


function App() {
  
  return (
    <div className="App">
       <Router>
                   <Routes>
                        <Route  path='/description' element={<Description/>}/>
                        
                     </Routes>
                   </Router>
                  
      <div className='row' >
      <Banner/>

      </div>
      <div className='row' >
      <Search/>

      </div>
      <div className='row' >
        
        <MovieList/>

        </div>
       
     
     
    </div>
  );
}

export default App;
