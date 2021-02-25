export const addOneElement = (oldObj, updatedValues) => {
    const updatedFooData = {...oldObj};

    updatedFooData.foodData.unshift(updatedValues.foodData);
    updatedValues.foodData = updatedFooData.foodData;

    return {
        ...oldObj,
        ...updatedValues
    };
}

export const addOneElementToCompareState = (oldObj, updatedValues) => {

    const updatedState = JSON.parse(JSON.stringify(oldObj));

    const isExist = updatedState.foodCompareData.some(food => food.id === updatedValues.foodCompareData.id);

    if(!isExist) {
        updatedState.foodCompareData.push(updatedValues.foodCompareData);
    }

    return {
        ...oldObj,
        ...updatedState
    }
}

export const updatedLimitedFood = (oldObj, updatedValues) => {

    if(updatedValues.foodData.length < 14) updatedValues.isLimitedFood = true;
    if(updatedValues.foodData.length >= 14) updatedValues.isLimitedFood = false;

    return {
        ...oldObj,
        ...updatedValues
    }
}

export const updatedOneElement = (oldObj, updatedValues) => {

    const updatedFooData = oldObj.foodData.map(foodEl => {
        if(foodEl.id === updatedValues.foodData.id) {
            foodEl = updatedValues.foodData;
        }
        return foodEl;
    });

    updatedValues.foodData = updatedFooData;
    
    return {
        ...oldObj,
        ...updatedValues
    };
}

export const deleteOneElement = (oldObj, updatedValues) => {
    const updatedFooData = oldObj.foodData.filter(foodEl => {
        if(foodEl.id !== updatedValues.foodData.id) {
            return foodEl;
        }
    });

    updatedValues.foodData = updatedFooData;
    
    return {
        ...oldObj,
        ...updatedValues
    };
}