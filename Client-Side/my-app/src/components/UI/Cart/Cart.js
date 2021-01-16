import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import FoodCardContent from '../../Food/FoodCard/FoodCardContent/FoodCardContent';

function Cart(props) {

  //const isLogged = localStorage.getItem('isLogged');
//   const [foodCartData, setCartData] = useState({ data: null });
  
//   useEffect(() => {
//     console.log('EFETKI raboti li', props);
//   });
//   console.log('raboti li', props);

  return (
    <div className={classes.Cart}>
        <div>
            { props.foodCartData ? props.foodCartData.map(food => (
                <div className={classes.CartFoodElement}>
                    <FoodCardContent key={food.id + 'cart'} {...food}/>
                </div>  
            )) : ''}
        </div>
        <p>Total price: 10.00</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      foodCartData: state.foodCart.foodCartData,
  };
};

export default withRouter(connect(mapStateToProps)(Cart));
