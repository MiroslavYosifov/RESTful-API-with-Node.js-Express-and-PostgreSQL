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
            <div className={classes.AuthContent}>
                {isHidden ? <h3>Log in to your account</h3> : <h3>Create your account</h3>}
                {  isHidden  ? <AuthLoginForm history={this.props.history}/> : <AuthRegistrationForm history={this.props.history}/> }
                <div>
                    {  isHidden  ? <p>Don't have an account? <a onClick={this.showRegistrationForm}>Sign Up</a></p> 
                                 : <p>Have an account? <a onClick={this.showRegistrationForm}>Sign in</a></p> }
                </div>
            </div>
        </div>
      )
    }
}

export default Auth;