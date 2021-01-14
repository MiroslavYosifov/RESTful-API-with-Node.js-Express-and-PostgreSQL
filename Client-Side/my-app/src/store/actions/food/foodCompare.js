import * as actionTypes from '../actionsTypes';
import { services } from '../../../services/index';

export const foodCompareDataUpdate = (food) => {
    return {
        type: actionTypes.FOOD_COMPARE_DATA_UPDATE,
        food: food
    }
}

export const addFoodToCompareList = (food) => {
    console.log('ACTIONS',food);
    return dispatch => {
        dispatch(foodCompareDataUpdate(food))
    }
}