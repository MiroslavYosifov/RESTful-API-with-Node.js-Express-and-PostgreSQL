import React, { useState, useEffect } from 'react';
import classes from './CartNotification.module.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


function CartNotification (props) {

    return (
        <div className={classes.CartNotification}>
            <p>{props.cartProductsCount}</p>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        cartProductsCount: state.cart.productCount,
    };
  };
  
export default withRouter(connect(mapStateToProps)(CartNotification));
