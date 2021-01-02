import React, { Component } from 'react';
import classes from './Auth.module.css';

import AuthLoginForm from './Forms/AuthLoginForm/AuthLoginForm';
import AuthLogoutForm from './Forms/AuthLogoutForm/AuthLogoutForm';
import AuthRegistrationForm from './Forms/AuthRegistrationForm/AuthRegistrationForm';

class Auth extends Component {

  render() {
    return (
      <div className={classes.Auth}>
        <h3>AUTH COMPONENT</h3>
        <AuthLoginForm/>
        <AuthLogoutForm/>
        <AuthRegistrationForm/>
      </div>
    )
  }
}

export default Auth;