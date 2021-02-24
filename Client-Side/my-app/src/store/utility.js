export const updatedObj = (oldObj, updatedValues) => {
    return {
        ...oldObj,
        ...updatedValues
    }
}

export const updatedLimitedFood = (oldObj, updatedValues) => {

    if(updatedValues.foodData.length < 7) {
        updatedValues.isLimitedFood = true;
    } else {
        updatedValues.isLimitedFood = false;
    }

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
        if(foodEl._id === updatedValues.foodData._id) {
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
        if(foodEl._id !== updatedValues.foodData._id) {
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

    const isExist = updatedState.foodCompareData.some(food => food._id === updatedValues.foodCompareData._id);

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
    debugger;
    const updatedState = JSON.parse(JSON.stringify(oldObj));

    const isExist = updatedState.productsCartData.some(food => food._id === updatedValues.productsCartData._id);

    if(!isExist) {
        updatedValues.productsCartData.totalPrice = 0;
        updatedValues.productsCartData.quantity = 0;
        updatedState.productsCartData.push(updatedValues.productsCartData);
    }

    updatedState.productCount = updatedState.productsCartData.length;
    updatedState.totalPrice -= 0;
    debugger;
    return {
        ...oldObj,
        ...updatedState
    }
}

export const removeOneElementToCartState = (oldObj, updatedValues) => {
    
    let priceToDecrease = 0;
    const updatedState = JSON.parse(JSON.stringify(oldObj));

    const updatedFooData = oldObj.productsCartData.filter(foodEl => {
        if(foodEl._id !== updatedValues.productsCartData._id) {
            return foodEl;
        } else {
            priceToDecrease = foodEl.totalPrice;
        }
    });

    updatedState.productsCartData = updatedFooData;
    updatedState.productCount = updatedFooData.length;
    updatedState.totalPrice -= priceToDecrease;
    
    return {
        ...oldObj,
        ...updatedState
    };
}

export const updateOneElementToCartState = (oldObj, updatedValues) => {

    const updatedState = JSON.parse(JSON.stringify(oldObj));
    
    updatedState.productsCartData = oldObj.productsCartData.filter(product => {
        if(product._id === updatedValues.productsCartData._id) {
            updatedState.totalPrice -= product.totalPrice;
            product.quantity = updatedValues.quantity;
            product.totalPrice = Number(updatedValues.quantity) * Number(product.price);
            updatedState.totalPrice += product.totalPrice;
            return product;
        } else {
            return product;
        }
    });

    return {
        ...oldObj,
        ...updatedState
    };
}