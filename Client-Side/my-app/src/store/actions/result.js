import * as actionTypes from './actionsTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

export const storeResult = (result) => {
    return function (dispatch, getState) {
        //console.log(getState().ctr.counter);
        setTimeout(() => {
            const oldState = getState().ctr.counter;
            dispatch(saveResult(result))
        }, 2000)
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};