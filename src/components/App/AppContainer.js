import { connect } from "react-redux";
import App from '../App/App';
import { getAllHeros, loadAllHerosRequest } from "../../redux/AllHerosRedux";
import { getSearchPhrase} from "../../redux/SearchHeroesRedux";

const mapStateToProps = state => ({
    reduxAllHeros : getAllHeros(state),
    getSearchPhrase: getSearchPhrase(state)
})

const mapDisptachToProps = dispatch => ({
    loadAllHerosRequest: (idPage) => dispatch(loadAllHerosRequest(idPage))
})

export default connect(mapStateToProps, mapDisptachToProps )(App);