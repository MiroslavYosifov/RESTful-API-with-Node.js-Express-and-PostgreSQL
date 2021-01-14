
import * as actionsTypes from '../../actions/actionsTypes';
import { addOneElementToCompareState } from '../../utility';

const initialState = {
    foodCompareData: [],
}

const foodCompareDataUpdate = (state, action) => {
    console.log(state);
    console.log(action);
    return addOneElementToCompareState(state, {
        foodCompareData: action.food,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.FOOD_COMPARE_DATA_UPDATE:
            return foodCompareDataUpdate(state, action);
        default:
            return state;
    }
};

export default reducer;