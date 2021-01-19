export const updatedObj = (oldObj, updatedValues) => {
    return {
        ...oldObj,
        ...updatedValues
    }
}

export const updatedLimitedFood = (oldObj, updatedValues) => {
    console.log('Tuka sym', updatedValues.foodData.length);

    if(updatedValues.foodData.length < 7) {
        updatedValues.isLimitedFood = true;
    } else {
        updatedValues.isLimitedFood = false;
    }

    console.log(updatedValues.isLimitedFood);
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
        updatedValues.foodCartData.totalPrice = 0;
        updatedState.foodCartData.push(updatedValues.foodCartData);
    }

    updatedState.productCount = updatedState.foodCartData.length;
    updatedState.totalPrice -= 0;

    return {
        ...oldObj,
        ...updatedState
    }
}

export const removeOneElementToCartState = (oldObj, updatedValues) => {
    
    let priceToDecrease = 0;
    const updatedState = JSON.parse(JSON.stringify(oldObj));

    const updatedFooData = oldObj.foodCartData.filter(foodEl => {
        if(foodEl.id !== updatedValues.foodCartData.id) {
            return foodEl;
        } else {
            priceToDecrease = foodEl.totalPrice;
        }
    });
    console.log('PRCIE TO DECRESE',priceToDecrease);

    updatedState.foodCartData = updatedFooData;
    updatedState.productCount = updatedFooData.length;
    updatedState.totalPrice -= priceToDecrease;
    
    return {
        ...oldObj,
        ...updatedState
    };
}

export const updateOneElementToCartState = (oldObj, updatedValues) => {

    console.log(oldObj);
    const updatedState = JSON.parse(JSON.stringify(oldObj));
    console.log('UPDATED VALUES', updatedValues);

    updatedState.foodCartData = oldObj.foodCartData.filter(foodEl => {
        if(foodEl.id === updatedValues.foodCartData.id) {
            foodEl.totalPrice = Number(updatedValues.quantity) * Number(foodEl.price);
            updatedState.totalPrice += foodEl.totalPrice;
            return foodEl;
        } else {
            return foodEl;
        }
    });

    console.log('LAST VALUES', updatedValues);
    return {
        ...oldObj,
        ...updatedState
    };
}