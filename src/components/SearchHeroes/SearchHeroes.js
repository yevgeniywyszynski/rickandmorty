import React, { useState, useEffect} from "react";
import styles from './SearchHeroes.module.scss'
import {Link} from 'react-router-dom';
import {INSTAGRAM_RICK,FACEBOOK_RICK} from '../../settings';

const SearchHeroes = ({reduxAllHeros, filterFilteredNames, searchSearchPharse, getCount, idsToShow}) => {

    const [heroes, setHeroes] = useState([])
    const [searchPharse, setSearch] = useState('')
    const [filteredNames, setFiltered] = useState([])

    useEffect(() => {
        setHeroes(reduxAllHeros.data)
    }, [reduxAllHeros])

    useEffect( () => {
            const pattern = new RegExp(searchPharse, 'i');
            if(searchPharse){
                const filterName = heroes.filter(hero => pattern.test(hero.name));
                setFiltered(filterName)
            }else {
                setFiltered([])
            }
    }, [searchPharse, heroes])
 
    useEffect(()=>{filterFilteredNames(filteredNames)},[filteredNames])
    useEffect(()=> {searchSearchPharse(searchPharse)}, [searchPharse])

    const handleChange = (event) => {
        setSearch(event.target.value)
    } 

    return(
        <>
            <div className={styles.navWrapper}>
                <div className={styles.inputWrapper}>
                    <input className={styles.inputHero}
                    type="text"
                    placeholder="Find your heroes"
                    onChange={handleChange}
                    value={searchPharse}
                    />
                </div>
                <div className={styles.social}>
                    <a className={styles.instaIcon} href={INSTAGRAM_RICK} ><i className="fa-brands fa-instagram "></i></a>
                    <a className={styles.faceIcon} href={FACEBOOK_RICK} ><i className="fa-brands fa-facebook "></i></a>
                </div>
                <Link className={styles.favouriteLists} to="/favourite-characters">All favorites</Link>
            </div>
            <p className={styles.qty}>Pobrancyh : {idsToShow} z : {getCount}</p>
        </>
    )
}

export default SearchHeroes;
