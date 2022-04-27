import { connect } from "react-redux";
import App from './App';
import { getAllHeros, loadAllHerosRequest } from "./redux/AllHerosRedux";

const mapStateToProps = state => ({
    reduxAllHeros : getAllHeros(state)
})

const mapDisptachToProps = dispatch => ({
    loadAllHerosRequest: (idPage) => dispatch(loadAllHerosRequest(idPage))
})

export default connect(mapStateToProps, mapDisptachToProps )(App);