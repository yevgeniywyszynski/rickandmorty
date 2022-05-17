import React, { useState, useEffect} from "react";
import styles from './SearchHeroes.module.scss'
import {Link} from 'react-router-dom';

const SearchHeroes = ({reduxAllHeros, filterFilteredNames, searchSearchPharse}) => {

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
                <a className={styles.instaIcon} href="https://www.instagram.com/rickandmorty/"><i className="fa-brands fa-instagram "></i></a>
                <a className={styles.faceIcon} href="https://www.facebook.com/RickandMorty/"><i className="fa-brands fa-facebook "></i></a>
            </div>
            <Link className={styles.favouriteLists} to="/favourite-characters">All favorites</Link>
        </div>
    )
}

export default SearchHeroes;