export const addOneElementToCartState = (oldObj, updatedValues) => {
    const updatedState = JSON.parse(JSON.stringify(oldObj));

    const isExist = updatedState.productsCartData.some(food => food.id === updatedValues.productsCartData.id);

    if(!isExist) {
        updatedValues.productsCartData.totalPrice = 0;
        updatedValues.productsCartData.quantity = 0;
        updatedState.productsCartData.push(updatedValues.productsCartData);
    }

    updatedState.productCount = updatedState.productsCartData.length;
    updatedState.totalPrice -= 0;

    return {
        ...oldObj,
        ...updatedState
    }
}

export const removeOneElementToCartState = (oldObj, updatedValues) => {
    
    let priceToDecrease = 0;
    const updatedState = JSON.parse(JSON.stringify(oldObj));

    const updatedFooData = oldObj.productsCartData.filter(foodEl => {
        if(foodEl.id !== updatedValues.productsCartData.id) {
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
        
        if(product.id === updatedValues.productsCartData.id) {
            updatedState.totalPrice -= product.totalPrice;
            product.quantity = updatedValues.quantity;
            product.totalPrice = Number(updatedValues.quantity) * Number(product.price);
            updatedState.totalPrice += product.totalPrice;
        } 
        return product;
    });

    return {
        ...oldObj,
        ...updatedState
    };
}