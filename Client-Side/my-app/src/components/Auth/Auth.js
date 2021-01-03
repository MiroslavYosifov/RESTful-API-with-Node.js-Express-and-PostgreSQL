import React, { Component } from 'react';
import classes from './Auth.module.css';

import AuthLoginForm from './Forms/AuthLoginForm/AuthLoginForm';
import AuthRegistrationForm from './Forms/AuthRegistrationForm/AuthRegistrationForm';

class Auth extends Component {
    state = {
        isHidden: true
    }

    showRegistrationForm = (event) => {
        const changeIsHidden = !this.state.isHidden;
        this.setState({ isHidden: changeIsHidden });
    }

    render() {
        const { isHidden } = this.state;
        return (
            <div className={classes.Auth}>
                <h3>AUTH COMPONENT</h3>
                {  isHidden  ? <AuthLoginForm/> : <AuthRegistrationForm/> }
            <div>
                {  isHidden  ? <p>Don't have an account? <a onClick={this.showRegistrationForm}>Sign Up</a></p> 
                             : <p>Have an account? <a onClick={this.showRegistrationForm}>Sign in</a></p> }
            </div>
          
        </div>
      )
    }
}

export default Auth;