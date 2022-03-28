import React from "react";
import styles from "../src/App.module.scss"

class App extends React.Component {
  state = {
    allHeros: [],
    idToShow: []
  }

  componentDidMount() {
    this.fetchRickyAndMorton()
  }

  fetchRickyAndMorton = async _ => {
    const rickMorton = await fetch('https://rickandmortyapi.com/api/character');
    const rickMortonJSON = await rickMorton.json()
    const nameId = rickMortonJSON.results

    this.setState({
      allHeros: nameId,
      idToShow: [1]
    })

  }

  nextHero() {
    this.setState({
      idToShow: [...this.state.idToShow, this.state.idToShow[this.state.idToShow.length-1] + 1]
    })
  }

  render() {
    const heroToShow = this.state.allHeros.filter(char => this.state.idToShow.includes(char.id))
    return(
      <div className="App" id="root">
        <div className={styles.herosWrapper}>
          {heroToShow.map(hero => (
            <div className={styles.heroWrapper} key={hero.name}>
              <div className={styles.imgWrapper}>
                <img className={styles.img} alt={hero.name} src={hero.image} />
              </div>
              <div className={styles.heroDescription}>
                <h3 className={styles.nameStl} key={hero.name}>name: <span className={styles.nameSp}>{hero.name}</span></h3>
                <h3 className={styles.nameStl}>status: <span className={styles.nameSp}>{hero.status}</span></h3>
                <h3 className={styles.nameStl}>episodes: <span className={styles.nameSp}>{hero.episode.length} </span></h3>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnWrapper}>
          <button type="button" className={styles.btn} onClick={() => this.nextHero()}><span className={styles.btnDescription}>NEXT HERO</span></button>
        </div>
      </div>
    )
  }
}

export default App;