import * as actionTypes from '../actions'

const initialState = {
    results: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: action.resCtr}),
            }
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