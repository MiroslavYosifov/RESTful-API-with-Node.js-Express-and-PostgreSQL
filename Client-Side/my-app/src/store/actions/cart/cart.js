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

export const updateFoodFromCart = (food, quantity) => {
    console.log(quantity);
    return {
        type: actionTypes.UPDATE_FOOD_IN_CART_DATA,
        food: food,
        quantity: quantity,
    }
}

export const addFoodToCartList = (food) => {
    return dispatch => {
        dispatch(addFoodToCart(food))
    }
}

export const removeFoodFromCartList = (food) => {
    return dispatch => {
        dispatch(removeFoodFromCart(food))
    }
}

export const updatedCartElementsList = (food, quantity) => {
    console.log('ACTIONS',food, quantity);
    return dispatch => {
        dispatch(updateFoodFromCart(food, quantity))
    }
}