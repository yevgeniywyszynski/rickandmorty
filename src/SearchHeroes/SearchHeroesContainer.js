import { connect } from "react-redux";
import SearchHeroes from './SearchHeroes';
import { getAllHeros} from "../redux/AllHerosRedux";
import { filteredNames, searchPharse } from "../redux/SearchHeroesRedux";

const mapStateToProps = state => ({
    reduxAllHeros : getAllHeros(state)
})

const mapDisptachToProps = dispatch => ({
    searchSearchPharse: (searchPhrase) => dispatch(searchPharse(searchPhrase)),
    filterFilteredNames: (names) => dispatch(filteredNames(names))
})

export default connect(mapStateToProps, mapDisptachToProps )(SearchHeroes);