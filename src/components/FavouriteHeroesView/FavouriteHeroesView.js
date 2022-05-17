import React from "react";
import styles from '../FavouriteHeroesView/FavouriteHeroesView.module.scss';
import Footer from "../Footer/Footer";
import {Outlet, Link} from 'react-router-dom';
import FavouriteHeroes from '../FavouriteHeroes/FavouriteHeroesContainer'

const FavouriteHeroesView= ({favouriteHeroes}) => {

  return(
    <div className={styles.favouriteWrapper}>
      <Link className={styles.homePage} to="/">HOME</Link>
      <FavouriteHeroes className={styles.hero} heroesToShow={favouriteHeroes} />
      <Footer />
      <Outlet />
    </div>
  )
}

export default FavouriteHeroesView;
