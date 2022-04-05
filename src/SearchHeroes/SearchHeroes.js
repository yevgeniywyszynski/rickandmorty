import React, { useState, useEffect, useCallback } from "react";
import styles from '../SearchHeroes/SearchHeroes.module.scss'
const SearchHeroes = ({allHeros, onChange}) => {

    const [heroes, setHeroes] = useState([])
    const [searchPharse, setSearch] = useState('')
    const [filteredNames, setFiltered] = useState([])

    useEffect(() => {
        setHeroes(allHeros)
    }, [allHeros])

    useEffect( () => {
            const pattern = new RegExp(searchPharse, 'i');
            console.log(pattern)
            if(searchPharse){
                const filterName = heroes.filter(hero => pattern.test(hero.name));
                setFiltered(filterName)
            }else {
                setFiltered([])
            }
    }, [searchPharse, heroes])
 
    useEffect(() =>{onChange(filteredNames, searchPharse)}, [filteredNames])

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