import React, { Component } from 'react';

import AuthLoginForm from './Forms/AuthLoginForm/AuthLoginForm';
import AuthLogoutForm from './Forms/AuthLogoutForm/AuthLogoutForm';

class Auth extends Component {

  render() {
    return (
      <div>
        <h3>AUTH COMPONENT</h3>
        <AuthLoginForm/>
        <AuthLogoutForm/>
      </div>
    )
  }
}

export default Auth;