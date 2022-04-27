
const reducerName = 'search'

const createActionName = name => `app/${reducerName}/${name}`;

export const SEARCH_PHRASE = createActionName('SEARCH_PHARSE')
export const FILTERED_NAMES = createActionName('FILTERED_NAMES');

export const searchPharse = payload => ({payload, type: SEARCH_PHRASE})
export const filteredNames = payload => ({payload, type: FILTERED_NAMES})



export default function reducer(statePart =[], action = {}) {
    switch(action.type) {
        case SEARCH_PHRASE:
            return {...statePart, searchPhrase: action.payload}
        case FILTERED_NAMES:
            return {...statePart, filteredNames: action.payload}
            default: 
            return statePart
    }
}