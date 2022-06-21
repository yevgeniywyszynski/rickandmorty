
import axios from 'axios';
import {RICK_MORTY_API_URL} from '../settings'

export const getAllHeros = ({allHeros}) => allHeros;
export const findHeroById = ({allHeros}, id) => allHeros.data.filter(hero => hero.id == id)
export const getFavoriteHeros = ({allHeros}) => allHeros.data.filter(hero => allHeros.favoriteHeroesIds.includes(hero.id))
export const getFavouriteHeroesIds = ({allHeros}) => allHeros.favoriteHeroesIds
export const getMaleHero = ({allHeros}) => {
    return {
    request: allHeros.request,
    data: allHeros.data.filter(hero => hero.gender == 'Male'),
    favoriteHeroesIds: allHeros.favoriteHeroesIds,
}
}

export const getCount = ({allHeros}) => allHeros.count

const reducerName = 'heros'

const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_ALLHEROS = createActionName('LOAD_ALLHEROS');
const LOAD_FIRSTHEROS = createActionName('LOAD_FIRSTHEROS')

const ADD_FAVORITEHEROESIDS = createActionName('ADD_FAVORITEHEROESIDS');
const REMOVE_FAVORITEHEROESIDS = createActionName('REMOVE_FAVORITEHEROESIDS');
const SET_COUNT = createActionName('SET_COUNT');


export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});

export const loadAllHeros = payload => ({payload, type: LOAD_ALLHEROS});
export const loadFirstHeros = payload => ({payload, type: LOAD_FIRSTHEROS});

export const addFavoriteHeroesIds = payload => ({payload, type: ADD_FAVORITEHEROESIDS})
export const removeFavoriteHeroesIds = payload => ({payload, type: REMOVE_FAVORITEHEROESIDS})
export const setCount = payload => ({payload, type: SET_COUNT})

export const loadAllHerosRequest = (pageId) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let allHeros = await axios.get(`${RICK_MORTY_API_URL}?page=${pageId}`)
            dispatch(loadAllHeros(allHeros.data.results))
            let count = allHeros.data.info.count
            dispatch(setCount(count))
            dispatch(endRequest())
        } catch(e) {
            console.log(e)
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
}


export default function reducer(statePart = [], action = {}) {
    switch(action.type) {
        case LOAD_ALLHEROS:
            return {...statePart, data: [...statePart.data,...action.payload]}
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST: 
            return {...statePart, request: { pending: false, error: action.error, success: false}}
        case ADD_FAVORITEHEROESIDS: 
            if(!statePart.favoriteHeroesIds.includes(action.payload)) {
                return {...statePart, favoriteHeroesIds: [...statePart.favoriteHeroesIds, action.payload]} 
            } else {
                return statePart
            }
        case SET_COUNT:
            return {...statePart, count: action.payload}
        case REMOVE_FAVORITEHEROESIDS:
            let deletedHeroesId = statePart.favoriteHeroesIds
            deletedHeroesId.splice(deletedHeroesId.indexOf(action.payload),1)
            return {
                ...statePart, favoriteHeroesIds: deletedHeroesId
            }
        default:
            return statePart
    }
}