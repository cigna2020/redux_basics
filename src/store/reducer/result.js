import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialState = {
    results: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), val: action.resCtr})})
        // return {
        //     ...state,
        //     results: state.results.concat({id: new Date(), val: action.resCtr}),
        // }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(el => el.id !== action.resId)
            return {
                ...state,
                results: updatedArray,
            }
        default:
            return state;
    }
};

export default reducer;