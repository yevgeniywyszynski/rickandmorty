import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppView from '../AppView/AppViewContainer';
import HeroView from "../HeroView/HeroViewContainer";
import FavouriteHeroesView from "../FavouriteHeroesView/FavouriteHeroesViewContainer";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<AppView/>} exact/>
          <Route path='/character/:id' element={<HeroView/>} exact/>
          <Route path = '/favourite-characters' element ={<FavouriteHeroesView/>} exact />
      </Routes>
    </Router>
  )
}

export default App;