export const SET_DATA = 'GET_DATA';

//Recibe la data importada en App.js y se va para el reducer
export function setData(data) {
    return function(dispatch) {
        return dispatch({type: SET_DATA, payload: data})
    }
}

