import * as actionTypes from '../actionsTypes';
import { services } from '../../../services/index';
import { setLocacalStorage } from '../../helpers/setLocalStorage';

    export const authStart = () => {
        return {
            type: actionTypes.AUTH_START
        }
    }

    export const authSuccess = (userId, token, username) => {
        return {
            type: actionTypes.AUTH_SUCCESS,
            userId: userId,
            token: token,
            username: username,
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

    export const authLogoutChecking = (history) => {
        return dispatch => {
            const token = localStorage.getItem('token').split('=')[1];
            services.userServices.logout({ token: token })
                .then(res => {        
                    setLocacalStorage.removeAuthData(res);
                    dispatch(authLogout());
                    history.replace('/food');
                }).catch(err => {
                    console.log(err => {
                        console.log(err);
                        dispatch(authFail())
                    })
                })
        }
    }

    export const authLogin = (authData, history) => {
        return dispatch => {
            dispatch(authStart());
            services.userServices.login(authData)
                .then(res => {
                    setLocacalStorage.addAuthData(res);
                    dispatch(authSuccess(res.user.id, res.token, res.user.username));
                    history.replace('/food');
                }).catch(err => {
                    console.log(err);
                    dispatch(authFail())
                })
        }
    }

    export const authRegistration = (data, history) => {
        return dispatch => {
            dispatch(authStart());
            services.userServices.registration(data)
                .then(res => {
                    setLocacalStorage.addAuthData(res);
                    dispatch(authSuccess(res.user.id, res.token, res.user.username));
                    history.replace('/food');
                }).catch(err => {
                    console.log(err);
                    dispatch(authFail());
                });
        }
    }

    // export const authCheckState = () => {
    //     return dispatch => {
    //         const token = localStorage.getItem('token');
    //         const userId = localStorage.getItem('userId');
    //         if(!token) {
    //             dispatch(authLogout());
    //         } else {
    //             dispatch(authSuccess(userId, token));
    //         }
    //     };
    // };