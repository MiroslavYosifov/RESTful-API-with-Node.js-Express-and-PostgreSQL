import * as actionTypes from '../actions/actionsTypes';
import { updatedObj } from '../utility';

const initialState = {
    results: []
}

const deleteResult = ( state, action ) => {
    const updatedArray = state.results.filter((results) => results.id !== action.resultElId)
        return updatedObj(state, { results: updatedArray })
}

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return updatedObj(state, { results: state.results.concat( { id: new Date(), value: Number(action.result) }) })
        case actionTypes.DELETE_RESULT:
            return deleteResult( state, action );
    };

    return state;
}

export default reducer;