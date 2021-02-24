import * as actionTypes from '../actionsTypes';
import { services } from '../../../services/index';
import { Redirect } from 'react-router';

    export const authStart = () => {
        return {
            type: actionTypes.AUTH_START
        }
    }

    export const authSuccess = (userId, token, username, isAdmin) => {
        return {
            type: actionTypes.AUTH_SUCCESS,
            userId: userId,
            token: token,
            username: username,
            isAdmin: isAdmin
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
            const token = localStorage.getItem('token').split('=')[1];
            services.userServices.logout({ token: token })
                .then(res => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('userId');
                    localStorage.removeItem('username');
                    localStorage.removeItem('isAdmin');
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
            services.userServices.login(authData)
                .then(res => {
                    console.log(res);
                    const isAdmin =  res.roles !== null ? res.roles.includes('admin') : "";
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('userId', res.user.id);
                    localStorage.setItem('username', res.user.username);
                    localStorage.setItem('isAdmin', isAdmin);
                    console.log(res.user.id);
                    dispatch(authSuccess(res.user.id, res.token, res.user.username, isAdmin));
                }).catch(err => {
                    console.log(err);
                    dispatch(authFail())
                })
        }
    }

    export const authRegistration = (data, props) => {
        return dispatch => {
            dispatch(authStart());
            services.userServices.registration(data)
                .then(res => {
                    window.location.hash = "food";
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