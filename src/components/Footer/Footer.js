import React from "react";
import styles from './Footer.module.scss';
import {LINKEDIN_URL} from '../../settings';

const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <p className={styles.footer}> © created by <a className={styles.linkAuthor} href={LINKEDIN_URL}> <span className={styles.author}>ywyszynski</span></a></p>
        </div>
    )
}

export default Footer;