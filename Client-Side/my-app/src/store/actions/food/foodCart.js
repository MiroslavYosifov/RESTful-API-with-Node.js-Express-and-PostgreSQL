import * as actionTypes from '../actionsTypes';
import { services } from '../../../services/index';

export const addFoodToCart = (food) => {
    return {
        type: actionTypes.FOOD_ADD_TO_CART_DATA,
        food: food
    }
}

export const addFoodToCartList = (food) => {
    console.log('ACTIONS',food);
    return dispatch => {
        dispatch(addFoodToCart(food))
    }
}