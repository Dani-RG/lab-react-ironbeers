import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router'
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;