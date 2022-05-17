import React from "react";
import styles from '../FavouriteHeroesView/FavouriteHeroesView.module.scss';
import {Outlet, Link} from 'react-router-dom';
import FavouriteHeroes from '../FavouriteHeroes/FavouriteHeroesContainer'

const FavouriteHeroesView= ({favouriteHeroes}) => {

  return(
    <div className={styles.favouriteWrapper}>
      <Link className={styles.backBtn} to="/">Back</Link>
      <FavouriteHeroes className={styles.hero} heroesToShow={favouriteHeroes} />
      <Outlet />
    </div>
  )
}

export default FavouriteHeroesView;
