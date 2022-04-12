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
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store