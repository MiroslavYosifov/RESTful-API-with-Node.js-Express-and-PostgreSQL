import * as actionTypes from './actionsTypes';
import { services } from '../../services/index';

export const foodStart = () => {
    return {
        type: actionTypes.FOOD_START
    }
}

export const foodSuccess = (foodData) => {
    return {
        type: actionTypes.FOOD_SUCCESS,
        foodData: foodData
    }
}

export const foodFail = (error) => {
    return {
        type: actionTypes.FOOD_FAIL,
        error: error
    }
}

export const foodDataAdd = (food) => {
    return {
        type: actionTypes.FOOD_DATA_ADD,
        food: food
    }
}

export const foodDataUpdate = (food) => {
    return {
        type: actionTypes.FOOD_DATA_UPDATE,
        food: food
    }
}

export const foodDataDeleteElement = (food) => {
    return {
        type: actionTypes.FOOD_DATA_DELETE_ELEMENT,
        food: food
    }
}

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

export const getFoods = () => {
    return dispatch => {
        dispatch(foodStart())
        services.foodService.getFoods()
            .then(res => {
                dispatch(foodSuccess(res))
            }).catch(err => {
                dispatch(foodFail(err))
            })
    }
};

export const addFood = (foodData) => {
    return dispatch => {
        dispatch(foodStart())
        services.foodService.addFood(foodData)
            .then(res => {
                console.log('TUKA LI SYM',res);
                dispatch(foodDataAdd(res))
            }).catch(err => {
                dispatch(foodFail(err))
            })
    }
};

export const editFoods = (foodData, props) => {
    console.log(foodData)
    return dispatch => {
        services.foodService.editFoods(foodData)
            .then(res => {
                console.log('TUKA LI SYM',res);
                dispatch(foodDataUpdate(res))
            }).catch(err => {
                console.log('FOD TUKA ERORRA',err);
                dispatch(foodFail(err))
            })
    }
};

export const deleteFood = (foodData) => {
    console.log('DELETVAM LI ',foodData)
    return dispatch => {
        services.foodService.deleteFood(foodData)
            .then(res => {
                console.log('TUKA LI SYM',res);
                dispatch(foodDataDeleteElement(res))
            }).catch(err => {
                console.log('FOD TUKA ERORRA',err);
                dispatch(foodFail(err))
            })
    }
};