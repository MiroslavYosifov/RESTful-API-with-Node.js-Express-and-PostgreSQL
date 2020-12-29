import * as actionTypes from '../actions/actionsTypes';
import { updatedObj } from '../utility';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState , action) => {

    switch(action.type) {
        case actionTypes.INCREMENT: 
            return updatedObj(state, { counter: state.counter + 1 });
        case actionTypes.DECREMENT:
            return updatedObj(state, { counter: state.counter - 1 });
        case actionTypes.ADD: 
            return updatedObj(state, { counter: state.counter + action.val });
        case actionTypes.SUBSTRACT:
            return updatedObj(state, { counter: state.counter - action.val });
    };

    return state;
}

export default reducer;