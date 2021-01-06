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

export const foodDataUpdate = (food) => {
    return {
        type: actionTypes.FOOD_DATA_UPDATE,
        food: food
    }
}

export const foodFail = (error) => {
    return {
        type: actionTypes.FOOD_FAIL,
        error: error
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
    console.log(foodData)
    return dispatch => {
        foodService.editFoods(foodData)
            .then(res => {
                console.log('TUKA LI SYM',res);
                dispatch(foodDataUpdate(res))
            }).catch(err => {
                console.log('FOD TUKA ERORRA',err);
                dispatch(foodFail(err))
            })
    }
};

// export const getFood = (id) => {
//     return dispatch => {
//         dispatch(foodStart())
//         foodService.getFoodd(id)
//             .then(res => {
//                 dispatch(foodSuccess(res))
//             }).catch(err => {
//                 dispatch(foodFail(err))
//             })
//     }
// };

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