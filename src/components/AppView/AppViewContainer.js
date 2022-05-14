import { connect } from "react-redux";
import AppView from '../AppView/AppView';
import { getAllHeros, loadAllHerosRequest } from "../../redux/AllHerosRedux";
import { getSearchPhrase, getFilterFilteredNames} from '../../redux/SearchHeroesRedux';

const mapStateToProps = state => ({
    reduxAllHeros : getAllHeros(state),
    getSearchPhrase: getSearchPhrase(state),
    getFilterFilteredNames : getFilterFilteredNames(state),
})

const mapDisptachToProps = dispatch => ({
    loadAllHerosRequest: (idPage) => dispatch(loadAllHerosRequest(idPage))
})

export default connect(mapStateToProps, mapDisptachToProps )(AppView);