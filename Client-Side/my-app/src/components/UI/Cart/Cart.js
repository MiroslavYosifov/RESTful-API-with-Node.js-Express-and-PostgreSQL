import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


function Cart(props) {

  //const isLogged = localStorage.getItem('isLogged');
  const [authData, setIsLogged] = useState({ isLogged: false, isAdmin: false });
  
  useEffect(() => {

  });

  return (
    <div className={classes.Cart}>
        <div>
            <p>First Element</p>
            <p>Second Element</p>
            <p>Third Element</p>
            <p>Fourth Element</p>
            <p>Fifth Element</p>
        </div>
        <p>Total price: 10.00</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      auth: state.auth,
  };
};

export default withRouter(connect(mapStateToProps)(Cart));
