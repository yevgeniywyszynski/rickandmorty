import React, { useEffect, useState } from "react";
import styles from "../src/App.module.scss"
import ImageHero from "./ImageHero/ImageHero";
import HeroDescription from "./HeroDescription/HeroDescription";
import Btn from "./Btn/Btn";
import Heroes from "./Heroes/Hereos";
import SerachHeroes from "./SearchHeroes/SearchHeroesContainer";
import Footer from "./Footer/Footer";

const getNewId = (currentArr) => [...currentArr, currentArr[currentArr.length-1] + 1]

const App = ({loadAllHerosRequest, reduxAllHeros}) => {
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
    if(reduxAllHeros.data){
      setAllHeros(reduxAllHeros.data)}
    
  }, [reduxAllHeros])

  useEffect(()=>{
    setHerosToShow(allHeros.filter(hero => idsToShow.includes(hero.id)))

  }, [idsToShow])

  const onChange = (filteredNames, searchPharse) => {
    if(filteredNames.length){
      setHerosToShow(filteredNames)
    }
    else if (!searchPharse){
     setHerosToShow(allHeros.filter(hero => idsToShow.includes(hero.id)))
    } else {
      setHerosToShow([])
    }
  }


    return(
      <div className="App" id="root">
        <SerachHeroes onChange={onChange}/>
        <Heroes showHero = {herosToShow} />
        <Btn action={() => (setIdsToShow(getNewId(idsToShow)))}/>
        <Footer />
      </div>
    )
  
}

export default App;