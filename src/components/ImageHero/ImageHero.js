import React from "react";
import styles from "../ImageHero/ImageHero.module.scss";

const ImageHero = ({name, image}) => {
    return(
        <div className={styles.imgWrapper}>
            <img className={styles.img} alt={name} src={image} />
        </div> 
    )
}


export default ImageHero;