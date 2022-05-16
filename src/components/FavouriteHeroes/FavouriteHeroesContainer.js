import { connect } from "react-redux";
import { removeFavoriteHeroesIds } from "../../redux/AllHerosRedux";
import FavouriteHeroes from '../FavouriteHeroes/FavouriteHeroes';

const mapDisptachToProps = dispatch => ({
    removeHeroes: (heroId) => dispatch(removeFavoriteHeroesIds(heroId))
})

export default connect(null, mapDisptachToProps )(FavouriteHeroes);