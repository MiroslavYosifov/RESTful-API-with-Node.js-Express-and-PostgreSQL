import React, { useState, useEffect } from 'react';
import classes from './Sidebar.module.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../../UI/Cart/Cart';

function Sidebar(props) {

  //const isLogged = localStorage.getItem('isLogged');
  const [elementsStatus, setShowedElements] = useState({ showCart: false });
  
  function showCart () {
    setShowedElements({
        showCart: !elementsStatus.showCart
    })
  }

  return (
    <div className={classes.Sidebar}>
        {elementsStatus.showCart ? <Cart/> : ''}
        <nav>
            <ul>
                <li><p onClick={() => {showCart()}}>Cart</p></li>
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
      auth: state.auth,
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
