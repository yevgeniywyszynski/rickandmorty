import React from "react";
import styles from "../src/App.module.scss"
import ImageHero from "./ImageHero/ImageHero";
import HeroDescription from "./HeroDescription/HeroDescription";
import Btn from "./Btn/Btn";
import Heroes from "./Heroes/Hereos";

class App extends React.Component {
  state = {
    allHeros: [],
    heroToShow: [],
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
    this.updateHeroesToShow()
  }

  nextHero() {
    this.setState({
      idToShow: [...this.state.idToShow, this.state.idToShow[this.state.idToShow.length-1] + 1]
    })
    this.updateHeroesToShow()
  }

  updateHeroesToShow(){
      this.setState({
        heroToShow: this.state.allHeros.filter(hero => this.state.idToShow.includes(hero.id))
      })
  }

  render() {
    return(
      <div className="App" id="root">
        <Heroes showHero = {this.state.heroToShow} />
        <Btn action={this.nextHero.bind(this)}/>
      </div>
    )
  }
}

export default App;