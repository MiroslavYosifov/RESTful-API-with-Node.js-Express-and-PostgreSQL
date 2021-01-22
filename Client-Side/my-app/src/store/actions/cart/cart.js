import * as actionTypes from '../actionsTypes';
import { services } from '../../../services/index';

export const addProductToCart = (product) => {
    return {
        type: actionTypes.PRODUCT_ADD_TO_CART_DATA,
        product: product
    }
}

export const removeProductFromCart = (product) => {
    return {
        type: actionTypes.PRODUCT_REMOVE_FROM_CART_DATA,
        product: product
    }
}

export const updateProductInCart = (product, quantity) => {
    return {
        type: actionTypes.PRODUCT_UPDATE_IN_CART_DATA,
        product: product,
        quantity: quantity,
    }
}

export const addProductToCartList = (product) => {
    return dispatch => {
        dispatch(addProductToCart(product))
    }
}

export const removeProductFromCartList = (product) => {
    return dispatch => {
        dispatch(removeProductFromCart(product))
    }
}

export const updateProductInCartList = (product, quantity) => {
    return dispatch => {
        dispatch(updateProductInCart(product, quantity))
    }
}