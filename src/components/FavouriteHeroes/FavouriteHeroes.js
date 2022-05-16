import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from '../Heroes/Heroes.module.scss';
import ImageHero from "../ImageHero/ImageHero";
import {Link} from 'react-router-dom';

const FavouriteHeroes = ({favouriteHeroes, removeHeroes}) => {

  return(
    <div className={styles.herosWrapper}>
      {favouriteHeroes.map(hero => (
        <div className={styles.heroWrapper} key={uuidv4()} >
          <Link to={"/favourite-characters"}>
            <ImageHero {...hero} />
          </Link>
          <button type="button" onClick={() => removeHeroes(hero.id)}>remove</button>
        </div>
      ))}
    </div>
  )
}

export default FavouriteHeroes;

