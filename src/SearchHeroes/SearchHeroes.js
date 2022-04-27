import React, { useState, useEffect} from "react";
import styles from '../SearchHeroes/SearchHeroes.module.scss'

const SearchHeroes = ({reduxAllHeros, onChange, filterFilteredNames, searchSearchPharse}) => {

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
 
    useEffect(() =>{onChange(filteredNames, searchPharse)}, [filteredNames])

    useEffect(()=>{filterFilteredNames(filteredNames)},[filteredNames])
    useEffect(()=> {searchSearchPharse(searchPharse)}, [searchPharse])

    const handleChange = (event) => {
            setSearch(event.target.value)
    } 

    return(
        <div className={styles.inputWrapper}>
            <input className={styles.inputHero}
            type="text"
            placeholder="Find your heroes"
            onChange={handleChange}
            value={searchPharse}
            />
        </div>
    )
}

export default SearchHeroes;