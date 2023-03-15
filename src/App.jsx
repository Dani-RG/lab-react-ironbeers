import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import Beers from './pages/Beers'
import SingleBeer from './pages/SingleBeer'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
        <Route path='/beers/:beerId' element={<SingleBeer/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
