import * as actionTypes from './actionsTypes';
import foodService from '../../services/food-service';

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

export const addFood = (foodData, props) => {
    return dispatch => {
        dispatch(foodStart())
        foodService.addFood(foodData)
            .then(res => {
                props.history.replace(`/reload`);
                props.history.replace('/food');
            }).catch(err => {
                dispatch(foodFail(err))
            })
    }
};

export const editFoods = (foodData, props) => {
    console.log(foodData, props);
    // return dispatch => {
    //     dispatch(foodStart())
    //     foodService.getFoods()
    //         .then(res => {
    //             dispatch(foodSuccess(res))
    //         }).catch(err => {
    //             dispatch(foodFail(err))
    //         })
    // }
};

export const getFoods = () => {
    return dispatch => {
        dispatch(foodStart())
        foodService.getFoods()
            .then(res => {
                dispatch(foodSuccess(res))
            }).catch(err => {
                dispatch(foodFail(err))
            })
    }
};