import React from "react";
import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <p className={styles.footer}> © created <a className={styles.linkAuthor} href='<span className={styles.author}>ywyszynski</span>'><span className={styles.author}>ywyszynski</span></a></p>
        </div>
    )
}

export default Footer;