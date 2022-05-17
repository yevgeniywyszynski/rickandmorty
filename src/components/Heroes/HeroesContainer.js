import { connect } from "react-redux";
import { addFavoriteHeroesIds, getFavoriteHeros, getFavouriteHeroesIds} from "../../redux/AllHerosRedux";
import Heroes from '../Heroes/Heroes'

const mapStateToProps = state => ({
    favoriteHeroes: getFavoriteHeros(state),
    favouriteHeroesIds: getFavouriteHeroesIds(state)
})

const mapDisptachToProps = dispatch => ({
    addHeroes: (heroId) => dispatch(addFavoriteHeroesIds(heroId)),
})

export default connect(mapStateToProps, mapDisptachToProps )(Heroes);