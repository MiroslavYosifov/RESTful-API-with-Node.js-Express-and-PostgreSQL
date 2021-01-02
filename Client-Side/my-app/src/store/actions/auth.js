import * as actionTypes from './actionsTypes';
import userService from '../../services/user-service';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (userId, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        token: token
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (authData) => {
    return dispatch => {
        dispatch(authStart());
        userService.login(authData)
            .then(res => {
                dispatch(authSuccess(res.user.id, res.token));
            }).catch(err => {
                console.log(err => {
                    console.log(err);
                    dispatch(authFail())
                })
            })
    }
}