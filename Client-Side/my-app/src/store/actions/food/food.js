import * as actionTypes from '../actionsTypes';
import { services } from '../../../services/index'

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

export const getLimitedFoodSuccess = (foodData) => {
    return {
        type: actionTypes.FOOD_LIMITED_SUCCESS,
        foodData: foodData
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


export const getLimitedFoods = (page) => {
    let data = { page: page };
    return dispatch => {
        dispatch(foodStart())
        services.foodService.getLimitedFoods(data)
            .then(res => {
                dispatch(getLimitedFoodSuccess(res))
            }).catch(err => {
                dispatch(foodFail(err))
            })
    }
};

export const addFood = (foodData) => {
    console.log(foodData);
    return dispatch => {
        dispatch(foodStart())
        services.foodService.addFood(foodData)
            .then(res => {
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
                dispatch(foodDataUpdate(res))
            }).catch(err => {
                dispatch(foodFail(err))
            })
    }
};

export const deleteFood = (foodData) => {
    return dispatch => {
        services.foodService.deleteFood(foodData)
            .then(res => {
                dispatch(foodDataDeleteElement(res))
            }).catch(err => {
                dispatch(foodFail(err))
            })
    }
};