import { SET_DATA } from './actions';

const initialState = {
    data: [],
}


//Mi estado inicial es un array vacío. Ahora se va a llenar con la data dispachada
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

