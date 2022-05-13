import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./Heroes.module.scss"
import ImageHero from "../../components/ImageHero/ImageHero";
import HeroDescription from "../HeroDescription/HeroDescription";
import {Link, NavLink} from 'react-router-dom';

const Heroes = ({showHero}) => {
    return(
        <div className={styles.herosWrapper}>
          {showHero.map(hero => (
            <div className={styles.heroWrapper} key={uuidv4()} >
              <Link to={"/character/" + hero.id} state={{id: hero.id}} className={styles.herosWrapper}>
                <ImageHero {...hero} />
                <HeroDescription {...hero}/>
              </Link>
            </div>
          ))}
        </div>
    )
}

export default Heroes;