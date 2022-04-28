import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import allHerosRedux from './AllHerosRedux';
import searchHerosRedux from "../redux/SearchHeroesRedux";
import thunk from 'redux-thunk'

const initalState = {
    allHeros: [],
    search: {
        searchPhrase: '',
        filteredNames: [],
    }
}

const reducers = {
    allHeros: allHerosRedux,
    search: searchHerosRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(thunk))
)

export default store