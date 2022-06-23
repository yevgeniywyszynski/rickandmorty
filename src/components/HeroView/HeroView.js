import React, { useEffect, useState } from 'react'
import styles from './HeroView.module.scss';
import { v4 as uuidv4 } from 'uuid';
import {useParams, Link} from "react-router-dom"
import MultilingualContent from '../MultilingualContent/MultilingualContent';

const HeroView = ({heroToShow, loadAllHerosRequest, reduxAllHeros}) => {

  let {id} = useParams()
  const[hero,setHero] = useState([])
  const [stateId, setStateId] = useState("")


  useEffect(()=> {
    if("data" in reduxAllHeros && reduxAllHeros.data.length == 0) {
    const fetchData = async () => {   
      loadAllHerosRequest()
    }
    fetchData()
  }
  }, [])
      
  useEffect(()=>{
    if(reduxAllHeros.request.success){
      setStateId(id)
    }
  }, [reduxAllHeros])

  useEffect(()=>{
    setHero(heroToShow(stateId))
  }, [stateId])


  return(
    <div className={styles.heroViewWrapper}>
      <Link className={styles.backBtn} to="/">Back</Link>
      <h2 className={styles.titleInfo}>Personal Information</h2>
        {hero.map(info => (
          <div className={styles.personalDataWrapper} key={uuidv4()}>
            <p className={styles.name}><span className={styles.nameStyle}> <MultilingualContent contentId="Name"/> </span>{info?.name}</p>
            <p className={styles.name}><span className={styles.nameStyle}> <MultilingualContent contentId="Status"/> </span><MultilingualContent contentId={info?.status}/></p>
            <p className={styles.name}><span className={styles.nameStyle}><MultilingualContent contentId="Episodes"/> </span>{info?.episode.length}</p>
            <p className={styles.name}><span className={styles.nameStyle}><MultilingualContent contentId="Gender"/> </span><MultilingualContent contentId={info?.gender} /></p>
            <p className={styles.name}><span className={styles.nameStyle}><MultilingualContent contentId="LastKnowLocation"/> </span>{info?.location.name}</p>
          </div>
        ))}
    </div>
  )
}

export default HeroView;