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

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authLogoutChecking = () => {
    return dispatch => {
        userService.logout()
            .then(res => {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                dispatch(authLogout());
            }).catch(err => {
                console.log(err => {
                    console.log(err);
                    dispatch(authFail())
                })
            })
    }
}

export const authLogin = (authData) => {
    return dispatch => {
        dispatch(authStart());
        userService.login(authData)
            .then(res => {
                localStorage.setItem('token', res.token);
                localStorage.setItem('userId', res.user.id);
                dispatch(authSuccess(res.user.id, res.token));
            }).catch(err => {
                console.log(err => {
                    console.log(err);
                    dispatch(authFail())
                })
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if(!token) {
            dispatch(authLogout());
        } else {
            dispatch(authSuccess(userId, token))
        }
    };
};