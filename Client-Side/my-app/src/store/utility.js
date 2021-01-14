export const updatedObj = (oldObj, updatedValues) => {
    return {
        ...oldObj,
        ...updatedValues
    }
}

export const addOneElement = (oldObj, updatedValues) => {
    console.log(updatedValues);
    const updatedFooData = {...oldObj};
    updatedFooData.foodData.unshift(updatedValues.foodData);
    updatedValues.foodData = updatedFooData.foodData;

    return {
        ...oldObj,
        ...updatedValues
    };
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

    const isExist = false;

    const updatedState = JSON.parse(JSON.stringify(oldObj));
    
    // const updatedState = {...oldObj};
    // if(updatedState) {
    //     isExist = updatedState.foodCompareData.some(food => food.id === updatedValues.foodCompareData.id);
    // }
    

    if(!isExist) {
        updatedState.foodCompareData.push(updatedValues.foodCompareData);
    }
    console.log('1',updatedState);
    console.log('2', oldObj);

    return {
        ...oldObj,
        ...updatedState
    }
}