import * as actionTypes from './actionsTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = () => {
    return {
        type: actionTypes.ADD,
        val: 10
    }
};

export const substract = () => {
    return {
        type: actionTypes.SUBSTRACT,
        val: 5
    }
};
