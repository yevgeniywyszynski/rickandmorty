import React from "react";
import styles from '../Btn/Btn.module.scss'
import MultilangualContent from '../MultilangualContent/MultilangualContent';

const Btn = props => {
    return(
        <div className={styles.btnWrapper}>
            <button type="button" className={styles.btn} onClick={() => props.action()}><span className={styles.btnDescription}><MultilangualContent contentId="seeMore"/></span></button>
        </div>
    )
}

export default Btn;