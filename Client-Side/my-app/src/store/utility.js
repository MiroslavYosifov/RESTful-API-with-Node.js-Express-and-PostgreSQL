export const updatedObj = (oldObj, updatedValues) => {
    return {
        ...oldObj,
        ...updatedValues
    }
}

export const updatedOneElement = (oldObj, updatedValues) => {
    console.log(oldObj.foodData);
    const updatedFooData = oldObj.foodData.map(foodEl => {
        if(foodEl.id === updatedValues.foodData.id) {
            foodEl = updatedValues.foodData;
        }
        return foodEl;
    })

    updatedValues.foodData = updatedFooData;
    console.log(updatedValues);
    return {
        ...oldObj,
        ...updatedValues
    };
}