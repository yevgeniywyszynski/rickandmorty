import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
const HeroView = ({heroToShow, loadAllHerosRequest}) => {
    const location = useLocation()
    const[hero,setHero] = useState([])
    const {id} = location.state

    useEffect( () => {
        setHero(heroToShow(id))
    }, [id])


    return(
        <div>
            
        </div>
    )
}

export default HeroView;

// TODO: W heroview ywswietlic informacje o tym bohaterze