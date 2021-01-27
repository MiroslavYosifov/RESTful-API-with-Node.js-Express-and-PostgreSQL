import React, { useState, useEffect } from 'react';
import classes from './Sidebar.module.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../../UI/Cart/Cart';
import CartNotification from '../../UI/Cart/CartNotification/CartNotification';

function Sidebar(props) {

  const [elementsStatus, setShowedElements] = useState({ showCart: false, isSelected: false });
  
  function showCart () {
    setShowedElements({
        showCart: !elementsStatus.showCart,
        isSelected:  !elementsStatus.isSelected
    })
  }

  console.log(elementsStatus.isSelected);

  return (
    <div className={classes.Sidebar}>
        {elementsStatus.showCart ? <Cart isLogged={props.isLogged}/> : ''}
        <nav>
            <ul>
                {elementsStatus.isSelected 
                  ? <li><span className={classes.SelectedListElement} onClick={() => {showCart()}}>Cart {props.cartProductsCount > 0 ? <span className={classes.CartNotification}><CartNotification /></span> : '' }</span></li> 
                  : <li><span onClick={() => {showCart()}}>Cart {props.cartProductsCount > 0 ?  <span className={classes.CartNotification}><CartNotification /></span> : '' }</span></li>}
                <li><span>TEST</span></li>
                <li><span>TEST</span></li>
                <li><span>TEST</span></li>
            </ul>
        </nav>
    </div>
    
  );
}

const mapStateToProps = state => {
  return {
      cartProductsCount: state.cart.productCount,
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
