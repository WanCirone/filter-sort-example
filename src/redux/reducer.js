import { SET_DATA, SELECT } from './actions';

const initialState = {
    data: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_DATA:
            return {
                data: action.payload
            }
        case SELECT:
            return {
                filtered: {
                    category: action.payload,
                }
            }
        default:
            return state;
    }
}

