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


  render() {
    return(
      <div className="App" id="root">
        <div className={styles.herosWrapper}>
          {this.state.allHeros.map( hero => (
            <img alt="heros" key={hero.name} src={hero.image}></img>
          ))}
        </div>
        <div className={styles.btnWrapper}>
          <button type="button" className={styles.btn} onClick={() => this.nextHero()}>Next Hero</button>
        </div>
      </div>
    )
  }
}

export default App;