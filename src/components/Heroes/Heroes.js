import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./Heroes.module.scss"
import ImageHero from "../ImageHero/ImageHero";
import {Link} from 'react-router-dom';

const Heroes = ({showHero, addHeroes, favouriteHeroesIds}) => {
  
  return(
    <div className={styles.herosWrapper}>
      {showHero.map(hero => (
        <div className={styles.heroWrapper} key={uuidv4()} >
          <Link to={"/character/" + hero.id}>
            <ImageHero {...hero} />
          </Link>
          {favouriteHeroesIds.includes(hero.id) ?
           <button disabled onClick= {() => addHeroes(hero.id)} type="button">Favorite Heroes</button>
           : <button onClick= {() => addHeroes(hero.id)} type="button">Favorite Heroes</button>
          }
        </div>
      ))}
    </div>
  )
}

export default Heroes;