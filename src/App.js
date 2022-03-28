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
    console.log(rickMortonJSON);
  }


  render() {
    return(
      <div className="App" id="root">
        Heloo
      </div>
    )
  }
}

export default App;