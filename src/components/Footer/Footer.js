import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <p className={styles.footer}> © created by <a className={styles.linkAuthor} href="https://www.linkedin.com/in/yevgeniy-wyszy%C5%84ski/"> <span className={styles.author}>ywyszynski</span></a></p>
        </div>
    )
}

export default Footer;