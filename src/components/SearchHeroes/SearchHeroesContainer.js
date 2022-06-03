import { connect } from "react-redux";
import SearchHeroes from './SearchHeroes';
import { getAllHeros, getCount} from "../../redux/AllHerosRedux";
import { filteredNames, searchPharse } from "../../redux/SearchHeroesRedux";

const mapStateToProps = state => ({
    reduxAllHeros : getAllHeros(state),
    getCount: getCount(state)
})

const mapDisptachToProps = dispatch => ({
    searchSearchPharse: (searchPhrase) => dispatch(searchPharse(searchPhrase)),
    filterFilteredNames: (names) => dispatch(filteredNames(names))
})

export default connect(mapStateToProps, mapDisptachToProps )(SearchHeroes);