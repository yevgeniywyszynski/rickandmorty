import React, { useEffect, useState } from "react";
import styles from "./AppView.module.scss";
import Btn from "../Btn/Btn";
import Heroes from "../Heroes/Hereos";
import SerachHeroes from "../SearchHeroes/SearchHeroesContainer";
import Footer from "../Footer/Footer";
import {Outlet} from 'react-router-dom';

const getNewId = (currentArr) => [...currentArr, currentArr[currentArr.length-1] + 1]

const AppView = ({loadAllHerosRequest, reduxAllHeros, getSearchPhrase, getFilterFilteredNames}) => {
    const [allHeros, setAllHeros] = useState([])
    const [herosToShow, setHerosToShow] = useState([])
    const [idsToShow, setIdsToShow] = useState([])
    
    useEffect(()=> {
      const fetchData = async () => {   
        loadAllHerosRequest()
        setIdsToShow([1])
      }
      fetchData()
    }, [])
  
    useEffect(() => {
      if(reduxAllHeros.data  && reduxAllHeros.request.success && !reduxAllHeros.request.pending){
        setAllHeros(reduxAllHeros.data)}

    }, [reduxAllHeros])
  
    useEffect(()=>{
      setHerosToShow(allHeros.filter(hero => idsToShow.includes(hero.id)))
  
    }, [idsToShow])
  
    useEffect (() => {
      if(getFilterFilteredNames.length){
        setHerosToShow(getFilterFilteredNames)
      }
      else if (!getSearchPhrase){
       setHerosToShow(allHeros.filter(hero => idsToShow.includes(hero.id)))
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
