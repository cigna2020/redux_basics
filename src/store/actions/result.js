import * as actionTypes from './actionsTypes';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        resCtr: res,
    };
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldState = getState().ctr.counter;
            console.log('Old State:', oldState);
            dispatch(saveResult(res))
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resId: id,
    }
};