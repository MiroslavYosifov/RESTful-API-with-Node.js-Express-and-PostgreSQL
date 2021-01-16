import React, { useState, useEffect } from 'react';
import classes from './Sidebar.module.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../../UI/Cart/Cart';
import CartNotification from '../../UI/Cart/CartNotification/CartNotification';

function Sidebar(props) {

  //const isLogged = localStorage.getItem('isLogged');
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
            {/* da opravq tagovete tuka ot p na drugo */}
                {elementsStatus.isSelected 
                  ? <li><p className={classes.SelectedListElement} onClick={() => {showCart()}}>Cart {props.cartProductsCount > 0 ? <div className={classes.CartNotification}><CartNotification /></div> : '' }</p></li> 
                  : <li><p onClick={() => {showCart()}}>Cart {props.cartProductsCount > 0 ?  <div className={classes.CartNotification}><CartNotification /></div> : '' }</p></li>}
                <li><p>TEST</p></li>
                <li><p>TEST</p></li>
                <li><p>TEST</p></li>
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
