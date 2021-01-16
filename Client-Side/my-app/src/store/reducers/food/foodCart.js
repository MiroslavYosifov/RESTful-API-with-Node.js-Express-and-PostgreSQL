
import * as actionsTypes from '../../actions/actionsTypes';
import { addOneElementToCartState } from '../../utility';

const initialState = {
    foodCartData: [],
}

const foodAddToCartData = (state, action) => {
    console.log(state);
    console.log(action);
    return addOneElementToCartState(state, {
        foodCartData: action.food,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.FOOD_ADD_TO_CART_DATA:
            return foodAddToCartData(state, action);
        default:
            return state;
    }
};

export default reducer;