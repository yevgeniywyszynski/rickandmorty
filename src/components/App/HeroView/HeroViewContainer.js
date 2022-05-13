import { connect } from "react-redux";
import HeroView from '../HeroView/HeroView';
import { findHeroById, loadAllHerosRequest } from "../../../redux/AllHerosRedux";

const mapStateToProps = (state) => {
    return {
    heroToShow : (id) => findHeroById(state, id),
    }
}

const mapDisptachToProps = dispatch => ({
    loadAllHerosRequest: (idPage) => dispatch(loadAllHerosRequest(idPage))

})

export default connect(mapStateToProps, mapDisptachToProps )(HeroView);