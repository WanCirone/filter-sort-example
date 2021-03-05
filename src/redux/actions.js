export const SET_DATA = 'GET_DATA';
export const SELECT = 'SELECT';

export function setData(data) {
    return function(dispatch) {
        return dispatch({type: SET_DATA, payload: data})
    }
}

export function select(selected) {
    return function(dispatch) {
        return dispatch({type: SELECT, payload: selected})
    }
}