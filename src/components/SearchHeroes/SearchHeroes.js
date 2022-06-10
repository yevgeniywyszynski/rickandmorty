import React, { useState, useEffect, useContext} from "react";
import styles from './SearchHeroes.module.scss'
import {Link} from 'react-router-dom';
import {INSTAGRAM_RICK,FACEBOOK_RICK,FLAG_USA_URL, FLAG_POLAND_URL} from '../../settings';
import MultilingualContent, {getTransationText} from "../MultilangualContent/MultilangualContent";
import { LanguageContext } from "../../contexts/multilingualContext";

const SearchHeroes = ({reduxAllHeros, filterFilteredNames, searchSearchPharse, getCount, idsToShow}) => {

    const [heroes, setHeroes] = useState([])
    const [searchPharse, setSearch] = useState('')
    const [filteredNames, setFiltered] = useState([])
    const {language, toggleLanguage} = useContext(LanguageContext) 

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

    const changeLang = (arg) => {
        toggleLanguage(arg)
    }

    return(
        <>
            <div className={styles.navWrapper}>
                <div className={styles.inputWrapper}>
                    <input className={styles.inputHero}
                    type="text"
                    placeholder= {getTransationText(language, 'searchBarPlaceholder')}
                    onChange={handleChange}
                    value={searchPharse}
                    />
                </div>
                <div className={styles.social}>
                    <a className={styles.instaIcon} href={INSTAGRAM_RICK} ><i className="fa-brands fa-instagram "></i></a>
                    <a className={styles.faceIcon} href={FACEBOOK_RICK} ><i className="fa-brands fa-facebook "></i></a>
                </div>
                <Link className={styles.favouriteLists} to="/favourite-characters"><MultilingualContent contentId="allFav"/></Link>
            </div>
            <p className={styles.qty}><MultilingualContent contentId="downloaded"/>: {idsToShow} <MultilingualContent contentId="from"/> : {getCount}</p>
            <div className={styles.flagsWrapper}>
                <button type="button" className={styles.btnlanguade} onClick ={() =>changeLang('en')}><img className={styles.moneyIcon} src={FLAG_USA_URL} /></button>
                <button type="button" className={styles.btnlanguade} onClick ={() =>changeLang('pl')}><img className={styles.moneyIcon} src={FLAG_POLAND_URL} /></button>
            </div>
        </>
    )
}

export default SearchHeroes;
