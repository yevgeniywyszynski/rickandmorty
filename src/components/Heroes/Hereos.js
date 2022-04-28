import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./Heroes.module.scss"
import ImageHero from "../../components/ImageHero/ImageHero";
import HeroDescription from "../HeroDescription/HeroDescription";

const Heroes = ({showHero}) => {
    return(
        <div className={styles.herosWrapper}>
        {showHero.map(hero => (
          <div className={styles.heroWrapper} key={uuidv4()}>
            <ImageHero {...hero} />
            <HeroDescription {...hero}/>
          </div>
        ))}
        </div>
    )
}

export default Heroes;