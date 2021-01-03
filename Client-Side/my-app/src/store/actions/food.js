import * as actionTypes from './actionsTypes';
import foodService from '../../services/food-service';

export const authStart = () => {
    return {
        type: actionTypes.FOOD_START
    }
}

export const authSuccess = (foodData) => {
    return {
        type: actionTypes.FOOD_SUCCESS,
        foodData: foodData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.FOOD_FAIL,
        error: error
    }
}

export const addFood = (foodData, props) => {
    return dispatch => {
        dispatch(authStart())
        foodService.addFood(foodData)
            .then(res => {
                props.history.replace(`/reload`);
                props.history.replace('/food');
            }).catch(err => {
                dispatch(authFail(err))
            })
    }
};

export const getFoods = () => {
    return dispatch => {
        dispatch(authStart())
        foodService.getFoods()
            .then(res => {
                dispatch(authSuccess(res))
            }).catch(err => {
                dispatch(authFail(err))
            })
    }
};