import React from "react";
import styles from '../Btn/Btn.module.scss'

const Btn = props => {
    return(
        <div className={styles.btnWrapper}>
            <button type="button" className={styles.btn} onClick={() => props.action()}><span className={styles.btnDescription}>SEE MORE</span></button>
        </div>
    )
}

export default Btn;