export const updatedObj = (oldObj, updatedValues) => {
    return {
        ...oldObj,
        ...updatedValues
    }
}

export const addOneElement = (oldObj, updatedValues) => {
    console.log(updatedValues);
    const updatedFooData = {...oldObj};
    console.log('111111',updatedFooData);
    updatedFooData.foodData.unshift(updatedValues.foodData);

    updatedValues.foodData = updatedFooData.foodData;
    console.log('2222222',updatedFooData);
    return {
        ...oldObj,
        ...updatedValues
    };
}

export const updatedOneElement = (oldObj, updatedValues) => {
    console.log(updatedValues);
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
    console.log(updatedValues);
    const updatedFooData = oldObj.foodData.filter(foodEl => {
        if(foodEl.id !== updatedValues.foodData.id) {
            return foodEl;
        }
    });
    console.log('UPDATED FOOD', updatedFooData);
    updatedValues.foodData = updatedFooData;
    
    return {
        ...oldObj,
        ...updatedValues
    };
}

export const addOneElementToCompareState = (oldObj, updatedValues) => {

    const updatedState = oldObj;
    // const updatedState = {...oldObj};
    const isExist = updatedState.foodCompareData.some(food => food.id === updatedValues.foodCompareData.id);
    
    if(!isExist) {
        updatedState.foodCompareData.push(updatedValues.foodCompareData);
    }

    return {
        ...oldObj,
        ...updatedState
    }
}