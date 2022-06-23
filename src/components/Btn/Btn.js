import React from "react";
import styles from '../Btn/Btn.module.scss'
import MultilingualContent from '../MultilingualContent/MultilingualContent';

const Btn = props => {
    return(
        <div className={styles.btnWrapper}>
            <button type="button" className={styles.btn} onClick={() => props.action()}><span className={styles.btnDescription}><MultilingualContent contentId="seeMore"/></span></button>
        </div>
    )
}

export default Btn;