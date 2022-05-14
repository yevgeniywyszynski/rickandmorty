import { connect } from "react-redux";
import HeroView from './HeroView';
import { findHeroById, loadAllHerosRequest, getAllHeros } from "../../redux/AllHerosRedux";

const mapStateToProps = (state) => {
    return {
        reduxAllHeros : getAllHeros(state),
        heroToShow : (id) => findHeroById(state, id),
    }
}

const mapDisptachToProps = dispatch => ({
    loadAllHerosRequest: (idPage) => dispatch(loadAllHerosRequest(idPage))
})

export default connect(mapStateToProps, mapDisptachToProps )(HeroView);