
import * as actionsTypes from '../../actions/actionsTypes';
import { addOneElementToCartState, removeOneElementToCartState } from '../../utility';

const initialState = {
    foodCartData: [],
    productCount: 0
}

const foodAddToCartData = (state, action) => {
    console.log(state);
    console.log(action);
    return addOneElementToCartState(state, {
        foodCartData: action.food,
    })
}

const foodRemoveFromCartData = (state, action) => {
    console.log(state);
    console.log(action);
    return removeOneElementToCartState(state, {
        foodCartData: action.food,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.FOOD_ADD_TO_CART_DATA:
            return foodAddToCartData(state, action);
        case actionsTypes.REMOVE_FOOD_FROM_CART_DATA:
            return foodRemoveFromCartData(state, action);
        default:
            return state;
    }
};

export default reducer;