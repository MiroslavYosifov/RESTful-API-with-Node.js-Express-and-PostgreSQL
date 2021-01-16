
import * as actionsTypes from '../../actions/actionsTypes';
import { addOneElementToCartState, removeOneElementToCartState, updateOneElementToCartState } from '../../utility';

const initialState = {
    foodCartData: [],
    productCount: 0,
    totalPrice: 0
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

const updateFoodFromCart = (state, action) => {
    console.log('test', action);
    return updateOneElementToCartState(state, {
        foodCartData: action.food,
        quantity: action.quantity
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.FOOD_ADD_TO_CART_DATA:
            return foodAddToCartData(state, action);
        case actionsTypes.REMOVE_FOOD_FROM_CART_DATA:
            return foodRemoveFromCartData(state, action);
        case actionsTypes.UPDATE_FOOD_IN_CART_DATA:
            return updateFoodFromCart(state, action);
        default:
            return state;
    }
};

export default reducer;