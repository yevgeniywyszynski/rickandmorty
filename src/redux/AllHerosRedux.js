
import axios from 'axios';

export const getAllHeros = ({allHeros}) => allHeros;

const reducerName = 'heros'

const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_ALLHEROS = createActionName('LOAD_ALLHEROS');

export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});

export const loadAllHeros = payload => ({payload, type: LOAD_ALLHEROS});

export const loadAllHerosRequest = () => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let allHeros = await axios.get('https://rickandmortyapi.com/api/character')
            dispatch(loadAllHeros(allHeros.data));
            dispatch(endRequest())
        } catch(e) {
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
}


export default function reducer(statePart = [], action = {}) {
    switch(action.type) {
        case LOAD_ALLHEROS:
            return {...statePart, data: action.payload}
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST: 
            return {...statePart, request: { pending: false, error: action.error, success: false}}
        default:
            return statePart
    }
}