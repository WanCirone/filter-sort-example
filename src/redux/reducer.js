import { SET_DATA } from './actions';

const initialState = {
    data: [],
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_DATA:
            return {
                data: action.payload
            }
        default:
            return state;
    }
}

