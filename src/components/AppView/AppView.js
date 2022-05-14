import React, { useEffect, useState } from "react";
import styles from "./AppView.module.scss";
import Btn from "../Btn/Btn";
import Heroes from "../Heroes/Hereos";
import SerachHeroes from "../SearchHeroes/SearchHeroesContainer";
import Footer from "../Footer/Footer";
import {Outlet} from 'react-router-dom';

const getNewId = (currentMaxId) => currentMaxId + 3

const AppView = ({loadAllHerosRequest, reduxAllHeros, getSearchPhrase, getFilterFilteredNames}) => {
  const [allHeros, setAllHeros] = useState([])
  const [herosToShow, setHerosToShow] = useState([])
  const [idsToShow, setIdsToShow] = useState(0)
    
  useEffect(()=> {
    if("data" in reduxAllHeros && reduxAllHeros.data.length == 0) {
    const fetchData = async () => {   
      loadAllHerosRequest()
        
    }
    fetchData()
  }
  setIdsToShow(3)
  }, [])
  
  useEffect(() => {
    if(reduxAllHeros.data  && reduxAllHeros.request.success && !reduxAllHeros.request.pending){
      setAllHeros(reduxAllHeros.data)}
    }, [reduxAllHeros])
  
  useEffect(()=>{
    setHerosToShow(allHeros.filter(hero => idsToShow >= hero.id))
    //if(idsToShow.length%20==0){
    //loadAllHerosRequest(Math.floor(idsToShow.length/20))
    //}
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
  

  return(
    <div className="App">
      <SerachHeroes />
      <Heroes showHero = {herosToShow} />
      {(getSearchPhrase === '') && <Btn action={() => (setIdsToShow(getNewId(idsToShow)))}/>}
      <Footer />
      <Outlet />
    </div>
  )
}

export default AppView;
