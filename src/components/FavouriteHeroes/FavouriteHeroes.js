import React from "react";
import styles from './FavouriteHeroes.module.scss';
import { v4 as uuidv4 } from 'uuid';
import ImageHero from "../ImageHero/ImageHero";
import {Link} from 'react-router-dom';

const FavouriteHeroes = ({heroesToShow, removeHeroes}) => {

  return(
    <>
        <div className={styles.favouriteWrapper}>
        {heroesToShow.map(hero => (
            <div className={styles.hero} key={uuidv4()} >
            <Link to={"/favourite-characters"}>
                <ImageHero {...hero} />
            </Link>
            <button className={styles.removeBtn} type="button" onClick={() => removeHeroes(hero.id)}>Remove</button>
            </div>
        ))}
        </div>
        {heroesToShow.length === 0 && <div className={styles.emptyData}>You don't have favourites heros!</div>}
    </>
  )
}

export default FavouriteHeroes;