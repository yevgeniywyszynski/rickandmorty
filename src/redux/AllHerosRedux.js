
import axios from 'axios';

export const getAllHeros = ({allHeros}) => allHeros;
export const findHeroById = ({allHeros}, id) => allHeros.data.filter(hero => hero.id == id)
export const getFavoriteHeros = ({allHeros}) => allHeros.data.filter(hero => allHeros.favoriteHeroesIds.includes(hero.id))

const reducerName = 'heros'

const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_ALLHEROS = createActionName('LOAD_ALLHEROS');
const LOAD_FIRSTHEROS = createActionName('LOAD_FIRSTHEROS')

const ADD_FAVORITEHEROESIDS = createActionName('ADD_FAVORITEHEROESIDS');
const REMOVE_FAVORITEHEROESIDS = createActionName('REMOVE_FAVORITEHEROESIDS');


export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});

export const loadAllHeros = payload => ({payload, type: LOAD_ALLHEROS});
export const loadFirstHeros = payload => ({payload, type: LOAD_FIRSTHEROS});

export const addFavoriteHeroesIds = payload => ({payload, type: ADD_FAVORITEHEROESIDS})
export const removeFavoriteHeroesIds = payload => ({payload, type: REMOVE_FAVORITEHEROESIDS})

export const loadAllHerosRequest = (pageId) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let allHeros = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageId}`)
            dispatch(loadAllHeros(allHeros.data.results))
            dispatch(endRequest())
        } catch(e) {
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
        case REMOVE_FAVORITEHEROESIDS:
            let deletedHeroesId = statePart.favoriteHeroesIds
            deletedHeroesId.splice(deletedHeroesId.indexOf(action.payload,1))
            return {
                ...statePart, favoriteHeroesIds: deletedHeroesId
            }
        default:
            return statePart
    }
}