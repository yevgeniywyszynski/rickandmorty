import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppView from '../AppView/AppViewContainer';
import HeroView from "../HeroView/HeroViewContainer";
import FavouriteHeroesView from "../FavouriteHeroesView/FavouriteHeroesViewContainer";
import { LanguageContext } from "../../contexts/multilingualContext";

const App = () => {

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const langLS = localStorage.getItem("lang") 
    if(langLS){
      setLanguage(langLS)
    }
  },[])

  function toggleLanguage(arg) {
    setLanguage(arg);
    localStorage.setItem("lang", arg)
  }

  return(
    <LanguageContext.Provider value = {{language, toggleLanguage}}>
      <Router>
        <Routes>
          <Route path='/' element={<AppView/>} exact/>
            <Route path='/character/:id' element={<HeroView/>} />
            <Route path = '/favourite-characters' element ={<FavouriteHeroesView/>} />
            <Route path="/:slug" element={<AppView />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  )
}

export default App;