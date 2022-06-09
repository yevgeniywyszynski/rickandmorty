import React, { useEffect, useState } from 'react'
import styles from './HeroView.module.scss';
import { v4 as uuidv4 } from 'uuid';
import {useParams, Link} from "react-router-dom"
import MultilangualContent from '../MultilangualContent/MultilangualContent';

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
            <p className={styles.name}><span className={styles.nameStyle}><MultilangualContent contentId="Name"/> </span>{info?.name}</p>
            <p className={styles.name}><span className={styles.nameStyle}><MultilangualContent contentId="Status"/> </span><MultilangualContent contentId={info?.status} /></p>
            <p className={styles.name}><span className={styles.nameStyle}><MultilangualContent contentId="Episodes"/> </span>{info?.episode.length}</p>
            <p className={styles.name}><span className={styles.nameStyle}><MultilangualContent contentId="Gender"/> </span><MultilangualContent contentId={info?.gender} /></p>
            <p className={styles.name}><span className={styles.nameStyle}><MultilangualContent contentId="LastKnowLocation"/> </span>{info?.location.name}</p>
          </div>
        ))}
    </div>
  )
}

export default HeroView;