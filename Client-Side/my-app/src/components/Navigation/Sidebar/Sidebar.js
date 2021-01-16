import React, { useState, useEffect } from 'react';
import classes from './Sidebar.module.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Cart from '../../UI/Cart/Cart';

function Sidebar(props) {

  //const isLogged = localStorage.getItem('isLogged');
  const [authData, setIsLogged] = useState({ isLogged: false, isAdmin: false });
  
  useEffect(() => {

  });

  return (
    <sidebar className={classes.Sidebar}>
        
        <nav>
            <ul>
                <li className={classes.CartButton}><Cart/><p>Cart</p></li>
                <li><p>TEST</p></li>
                <li><p>TEST</p></li>
                <li><p>TEST</p></li>
            </ul>
        </nav>
    </sidebar>
    
  );
}

const mapStateToProps = state => {
  return {
      auth: state.auth,
  };
};

export default withRouter(connect(mapStateToProps)(Sidebar));
