export const updatedObj = (oldObj, updatedValues) => {
    return {
        ...oldObj,
        ...updatedValues
    }
}

export const addOneElement = (oldObj, updatedValues) => {
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

// CART UTILITITES

export const addOneElementToCartState = (oldObj, updatedValues) => {

    const updatedState = JSON.parse(JSON.stringify(oldObj));

    const isExist = updatedState.foodCartData.some(food => food.id === updatedValues.foodCartData.id);

    if(!isExist) {
        updatedState.foodCartData.push(updatedValues.foodCartData);
    }

    updatedState.productCount = updatedState.foodCartData.length;

    return {
        ...oldObj,
        ...updatedState
    }
}

export const removeOneElementToCartState = (oldObj, updatedValues) => {
    
    const updatedFooData = oldObj.foodCartData.filter(foodEl => {
        if(foodEl.id !== updatedValues.foodCartData.id) {
            return foodEl;
        }
    });

    updatedValues.foodCartData = updatedFooData;
    updatedValues.productCount = updatedValues.foodCartData.length;
    
    return {
        ...oldObj,
        ...updatedValues
    };
}