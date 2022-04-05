import React, { useEffect, useState } from "react";
import styles from "../src/App.module.scss"
import ImageHero from "./ImageHero/ImageHero";
import HeroDescription from "./HeroDescription/HeroDescription";
import Btn from "./Btn/Btn";
import Heroes from "./Heroes/Hereos";
import SerachHeroes from "./SearchHeroes/SearchHeroes";

const getNewId = (currentArr) => [...currentArr, currentArr[currentArr.length-1] + 1]

const App = () => {
  const [allHeros, setAllHeros] = useState([])
  const [herosToShow, setHerosToShow] = useState([])
  const [idsToShow, setIdsToShow] = useState([])
  
  useEffect(()=> {
    const fetchData = async () => {   
      const rickMorton = await fetch('https://rickandmortyapi.com/api/character')
      const rickMortonJSON = await rickMorton.json()
      const nameId = rickMortonJSON.results
  
      setAllHeros(nameId)
      setIdsToShow([1])
    }
    fetchData()    
  }, [])

  useEffect(()=>{
    setHerosToShow(allHeros.filter(hero => idsToShow.includes(hero.id)))
  }, [idsToShow, allHeros])

  const onChange = (filteredNames) => {
    if(filteredNames.length){
      setHerosToShow(filteredNames)
    }
    else {
     setHerosToShow(allHeros.filter(hero => idsToShow.includes(hero.id)))
     //setHerosToShow(herosToShow)
    }
  }

    return(
      <div className="App" id="root">
        <SerachHeroes  allHeros={allHeros} onChange={onChange}/>
        <Heroes showHero = {herosToShow} />
        <Btn action={() => (setIdsToShow(getNewId(idsToShow)))}/>
      </div>
    )
  
}

export default App;