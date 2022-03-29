import React from "react";
import styles from "../Heroes/Heroes.module.scss"
import ImageHero from "../ImageHero/ImageHero";
import HeroDescription from "../HeroDescription/HeroDescription";

const Heroes = ({showHero}) => {
    return(
        <div className={styles.herosWrapper}>
        {showHero.map(hero => (
          <div className={styles.heroWrapper} key={hero.name}>
            <ImageHero {...hero} />
            <HeroDescription {...hero}/>
          </div>
        ))}
      </div>
    )
}

export default Heroes;