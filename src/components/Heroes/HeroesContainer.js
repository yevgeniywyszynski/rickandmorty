import { connect } from "react-redux";
import { addFavoriteHeroesIds, getFavoriteHeros} from "../../redux/AllHerosRedux";
import Heroes from '../Heroes/Heroes'

const mapStateToProps = state => ({
    favoriteHeroes: getFavoriteHeros(state) 
})

const mapDisptachToProps = dispatch => ({
    addHeroes: (heroId) => dispatch(addFavoriteHeroesIds(heroId)),
})

export default connect(mapStateToProps, mapDisptachToProps )(Heroes);