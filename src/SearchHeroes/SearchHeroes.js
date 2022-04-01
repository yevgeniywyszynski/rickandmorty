import React, { useState, useEffect, useCallback } from "react";
import styles from '../SearchHeroes/SearchHeroes.module.scss'
const SearchHeroes = ({allHeros}) => {

    const [heroes, setHeroes] = useState([])
    const [searchPharse, setSearch] = useState('')
    const [filteredNames, setFiltered] = useState([])

    useEffect(() => {
        setHeroes(allHeros)
    }, [allHeros])

    useEffect(() => {
            const pattern = new RegExp(searchPharse, 'i');
            if(searchPharse){
                const filterName = heroes.filter(hero => pattern.test(hero.name));
                setFiltered(filterName)
            }
    }, [searchPharse, heroes])
 
    const handleChange = (event) => {
            setSearch(event.target.value)
    } 

    return(
        <div className={styles.inputWrapper}>
            <input className={styles.inputHero}
            type="text"
            placeholder="Search yours heroes"
            onChange={handleChange}
            value={searchPharse}
            />
        </div>
    )
}

export default SearchHeroes;