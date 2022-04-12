import { combineReducers, createStore } from "redux"
import allHerosRedux from './AllHerosRedux';



const initalState = {
    allHeros: [],
}

const reducers = {
    allHeros: allHerosRedux,
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
)

export default store