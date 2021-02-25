
import * as actionsTypes from '../../actions/actionsTypes';
import { addOneElementToCartState, removeOneElementToCartState, updateOneElementToCartState } from '../../helpers/cartHelpers';

const initialState = {
    productsCartData: [],
    productCount: 0,
    totalPrice: 0
}

const productAddToCartData = (state, action) => {
    return addOneElementToCartState(state, {
        productsCartData: action.product,
    })
}

const productRemoveFromCartData = (state, action) => {
    return removeOneElementToCartState(state, {
        productsCartData: action.product,
    })
}

const productUpdateInCart = (state, action) => {
    return updateOneElementToCartState(state, {
        productsCartData: action.product,
        quantity: action.quantity
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.PRODUCT_ADD_TO_CART_DATA:
            return productAddToCartData(state, action);
        case actionsTypes.PRODUCT_REMOVE_FROM_CART_DATA:
            return productRemoveFromCartData(state, action);
        case actionsTypes.PRODUCT_UPDATE_IN_CART_DATA:
            return productUpdateInCart(state, action);
        default:
            return state;
    }
};

export default reducer;