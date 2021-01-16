import * as actionTypes from '../actionsTypes';
import { services } from '../../../services/index';

export const addFoodToCart = (food) => {
    return {
        type: actionTypes.FOOD_ADD_TO_CART_DATA,
        food: food
    }
}

export const removeFoodFromCart = (food) => {
    return {
        type: actionTypes.REMOVE_FOOD_FROM_CART_DATA,
        food: food
    }
}

export const addFoodToCartList = (food) => {
    console.log('ACTIONS',food);
    return dispatch => {
        dispatch(addFoodToCart(food))
    }
}

export const removeFoodFromCartList = (food) => {
    console.log('ACTIONS',food);
    return dispatch => {
        dispatch(removeFoodFromCart(food))
    }
}