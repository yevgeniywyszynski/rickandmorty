import React, { useEffect, useState } from "react";
import styles from "./AppView.module.scss";
import Btn from "../Btn/Btn";
import Heroes from "../Heroes/HeroesContainer";
import SerachHeroes from "../SearchHeroes/SearchHeroesContainer";
import Footer from "../Footer/Footer";
import {Outlet, Link} from 'react-router-dom';

const getNewId = (currentMaxId) => currentMaxId + 20

const AppView = ({loadAllHerosRequest, reduxAllHeros, getSearchPhrase, getFilterFilteredNames}) => {
  const [allHeros, setAllHeros] = useState([])
  const [herosToShow, setHerosToShow] = useState([])
  const [idsToShow, setIdsToShow] = useState(0)
    
  useEffect(()=> {
    if("data" in reduxAllHeros && reduxAllHeros.data.length == 0) {
    const fetchData = async () => {   
      loadAllHerosRequest(1)  
    }
    fetchData()
  }
  setIdsToShow(20)
  }, [])
  
  useEffect(() => {
    if(reduxAllHeros.data  && reduxAllHeros.request.success && !reduxAllHeros.request.pending){
      setAllHeros(reduxAllHeros.data)}
    }, [reduxAllHeros])
  
  useEffect(()=>{
    setHerosToShow(allHeros.filter(hero => idsToShow >= hero.id))
  }, [idsToShow])
  
  useEffect (() => {
    if(getFilterFilteredNames.length){
      setHerosToShow(getFilterFilteredNames)
    }
    else if (!getSearchPhrase){
      setHerosToShow(allHeros.filter(hero => idsToShow >= hero.id))
    } else {
      setHerosToShow([])
    }
  }, [getSearchPhrase, getFilterFilteredNames])

  const getPageId = (e) => {
    loadAllHerosRequest((idsToShow+20)/20)
    console.log((idsToShow+20)/20)
    setIdsToShow(getNewId(idsToShow))
  }
  

  return(
    <div className="App">
      <SerachHeroes />
      <Link to="/favourite-characters">All favorites</Link>
      <Heroes showHero = {herosToShow} />
      {(getSearchPhrase === '') && <Btn action={(e) => getPageId(e)}/>}
      <Footer />
      <Outlet />
    </div>
  )
}

export default AppView;
