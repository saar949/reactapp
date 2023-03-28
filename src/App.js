
import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import Menu from './compnents/Menu';
import Home from './compnents/Home';
import Secand from './compnents/Secand';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path='2' element={<Home/>} />
          <Route  path='/1' element={<Secand/>}/>
        </Routes>
      </HashRouter>


     
    </div>
  );
}

export default App;
