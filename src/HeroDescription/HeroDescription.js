import React, { useState, useEffect } from "react";
import styles from '../HeroDescription/HeroDescription.module.scss'

const HeroDescription = ({name, status, episode}) => {
    const [heroName, setHeroName] = useState(name)
    const [heroStatus, setHeroStatus] = useState(status)

    useEffect(() => {
        console.log("changed")
        console.log(name)
    }, [heroName, heroStatus, name])

    return(
        <div className={styles.heroDescription}>
            <h3 className={styles.nameStl} key={name}>name: <span className={styles.nameSp}>{name}</span></h3>
            <h3 className={styles.nameStl}>status: <span className={styles.nameSp}>{status}</span></h3>
            <h3 className={styles.nameStl}>episodes: <span className={styles.nameSp}>{episode.length} </span></h3>
        </div>
    )
}

export default HeroDescription;