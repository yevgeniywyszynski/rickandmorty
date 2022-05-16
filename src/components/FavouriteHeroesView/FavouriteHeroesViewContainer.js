import { connect } from "react-redux";
import { getFavoriteHeros } from "../../redux/AllHerosRedux";
import FavouriteHeroesView from "./FavouriteHeroesView";

const mapStateToProps = state => ({
    favouriteHeroes: getFavoriteHeros(state)
})

export default connect(mapStateToProps, null )(FavouriteHeroesView);