import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppView from '../AppView/AppViewContainer';
import FavouriteHeroes from "../FavouriteHeroes/FavouriteHeroesContainer";
import HeroView from "../HeroView/HeroViewContainer";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<AppView/>} exact/>
          <Route path='/character/:id' element={<HeroView/>} exact/>
          <Route path = '/favourite-characters' element ={<FavouriteHeroes/>} exact />
      </Routes>
    </Router>
  )
}

export default App;