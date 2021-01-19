
import * as actionsTypes from '../../actions/actionsTypes';
import { updatedObj, updatedLimitedFood, addOneElement, updatedOneElement, deleteOneElement } from '../../utility';

const initialState = {
    foodData: null,
    error: null,
    loading: false,
    isLimitedFood: false
}

const  foodStart = ( state, action) => {
    return updatedObj(state, {
        error: null, 
        loading: true 
    });
}

const foodSuccess = (state, action) => {
    return updatedObj(state, { 
        foodData: action.foodData,
        error: null, 
        loading: false 
    });
}

const foodFail = (state, action) => {
    return updatedObj(state, {
        error: action.error, 
        loading: false 
    });
}

const limitedFoodSuccess = (state, action) => {
    return updatedLimitedFood( state, {
        foodData: action.foodData,
        error: null, 
        loading: false, 
        isLimitedFood: false
    });
}

const foodDataAdd = (state, action) => {
    console.log('STATE', state);
    console.log('action', action.food);
    return addOneElement(state, {
        foodData: action.food,
        error: null, 
        loading: false 
    })
}

const foodDataUpdate = (state, action) => {
    // console.log('STATE', state);
    // console.log('action', action.food);
    return updatedOneElement(state, {
        foodData: action.food,
        error: null, 
        loading: false 
    })
}

const foodDataDelete = (state, action) => {
    // console.log('STATE', state);
    // console.log('action', action.food);
    return deleteOneElement(state, {
        foodData: action.food,
        error: null, 
        loading: false 
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.FOOD_START:
            return foodStart(state, action);
        case actionsTypes.FOOD_SUCCESS:
            return foodSuccess(state, action);
        case actionsTypes.FOOD_FAIL:
            return foodFail(state, action);
        case actionsTypes.FOOD_LIMITED_SUCCESS:
            return limitedFoodSuccess(state, action);
        case actionsTypes.FOOD_DATA_ADD:
            return foodDataAdd(state, action);
        case actionsTypes.FOOD_DATA_UPDATE:
            return foodDataUpdate(state, action);
        case actionsTypes.FOOD_DATA_DELETE_ELEMENT:
            return foodDataDelete(state, action);
        default:
            return state;
    }
};

export default reducer;