import { connect } from "react-redux";
import App from './App';
import { getAllHeros, loadAllHerosRequest } from "./redux/AllHerosRedux";

const mapStateToProps = state => ({
    allHeros : getAllHeros(state)
})

const mapDisptachToProps = dispatch => ({
    loadAllHerosRequest: () => dispatch(loadAllHerosRequest())
})

export default connect(mapStateToProps, mapDisptachToProps )(App);