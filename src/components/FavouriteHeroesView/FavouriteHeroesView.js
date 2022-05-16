import React from "react";
import styles from "./AppView.module.scss";
import Footer from "../Footer/Footer";
import {Outlet} from 'react-router-dom';

const FavouriteHeroesView= ({favouriteHeroes}) => {
  return(
    <div className="App">
      <FavouriteHeroes heroesToShow={favouriteHeroes} />
      <Footer />
      <Outlet />
    </div>
  )
}

export default FavouriteHeroesView;
