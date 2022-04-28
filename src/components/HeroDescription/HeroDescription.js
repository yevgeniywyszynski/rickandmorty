import styles from '../HeroDescription/HeroDescription.module.scss'

const HeroDescription = ({name, status, episode}) => {
    return(
        <div className={styles.heroDescription}>
            <p className={styles.nameStl} key={name}>name: <span className={styles.nameSp}>{name}</span></p>
            <p className={styles.nameStl}>status: <span className={styles.nameSp}>{status}</span></p>
            <p className={styles.nameStl}>episodes: <span className={styles.nameSp}>{episode.length} </span></p>
        </div>
    )
}

export default HeroDescription;