import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
import styles from './HeroView.module.scss';
import { v4 as uuidv4 } from 'uuid';

const HeroView = ({heroToShow}) => {

    const location = useLocation()
    const[hero,setHero] = useState([])
    const {id} = location.state

    useEffect( () => {
        setHero(heroToShow(id))
    }, [id])


    return(
        <div>
            <h2 className={styles.titleInfo}>Personal Information</h2>
                {hero.map(info => (
                    <div className={styles.personalDataWrapper} key={uuidv4()}>
                        <p className={styles.name}><span className={styles.nameStyle}>Name: </span>{info.name}</p>
                        <p className={styles.name}><span className={styles.nameStyle}>Status: </span>{info.status}</p>
                        <p className={styles.name}><span className={styles.nameStyle}>Episodes: </span>{info.episode.length}</p>
                        <p className={styles.name}><span className={styles.nameStyle}>Gender: </span>{info.gender}</p>
                    </div>
                ))}
        </div>
    )
}

export default HeroView;