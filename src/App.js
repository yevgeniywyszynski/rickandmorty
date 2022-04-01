import React from "react";
import styles from "../src/App.module.scss"
import ImageHero from "./ImageHero/ImageHero";
import HeroDescription from "./HeroDescription/HeroDescription";
import Btn from "./Btn/Btn";
import Heroes from "./Heroes/Hereos";
import SerachHeroes from "./SearchHeroes/SearchHeroes";

class App extends React.Component {
  state = {
    allHeros: [],
    heroToShow: [],
    idToShow: [],
    allName: [],
  }

  componentDidMount() {
    this.fetchRickyAndMorton()
  }

  fetchRickyAndMorton = async _ => {
    const rickMorton = await fetch('https://rickandmortyapi.com/api/character');
    const rickMortonJSON = await rickMorton.json()
    const nameId = rickMortonJSON.results
    const names = nameId.map(e => e.name)
  

    this.setState({
      allHeros: nameId,
      idToShow: [1],
      allName: names
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
        <SerachHeroes  allHeros={this.state.allHeros}/>
        <Heroes showHero = {this.state.heroToShow} />
        <Btn action={this.nextHero.bind(this)}/>
      </div>
    )
  }
}

export default App;