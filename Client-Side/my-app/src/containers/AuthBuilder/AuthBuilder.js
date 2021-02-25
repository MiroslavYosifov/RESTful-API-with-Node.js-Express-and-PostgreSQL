import React, { Component } from 'react';
import  classes from './AuthBuilder.module.css';

import Auth from '../../components/Auth/Auth';
import { withRouter } from 'react-router-dom';

class AuthBuilder extends Component {
  state = {
    userInfo: {}
  }

  render() {
    return (
      <div className={classes.AuthBuilder}>
        <Auth history={this.props.history}/>
      </div>
    )
  }
}

export default withRouter(AuthBuilder);