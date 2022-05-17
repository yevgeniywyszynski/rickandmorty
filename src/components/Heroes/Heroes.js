import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./Heroes.module.scss"
import ImageHero from "../ImageHero/ImageHero";
import {Link} from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Heroes = ({showHero, addHeroes, favouriteHeroesIds}) => {
  console.log(showHero);
  return(
    <div className={styles.herosWrapper}>
      {showHero.map(hero => (
        <div className={styles.heroWrapper} key={uuidv4()} >
          <div className={styles.nameWrapper}>
              <p className={styles.heroName}>{hero.name}</p>
              {favouriteHeroesIds.includes(hero.id) ?
              <button className={styles.btnAdd} disabled><AiFillHeart className={styles.heart} /></button>
            : <button className={styles.btnAdd} onClick= {() => addHeroes(hero.id)} type="button"><AiOutlineHeart className={styles.heart} /></button>
            }
          </div>
            <Link to={"/character/" + hero.id} className={styles.link}>
              <ImageHero {...hero} />
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Heroes;