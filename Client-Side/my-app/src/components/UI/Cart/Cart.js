import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css';

import Scrollbar from 'react-scrollbars-custom';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeFoodFromCartList } from '../../../store/actions/index';

import FoodCardContent from '../../Food/FoodCard/FoodCardContent/FoodCardContent';

function Cart(props) {

  const isLogged = localStorage.getItem('isLogged');
  const [foodCartData, setCartData] = useState({ data: null });
  
  useEffect(() => {
    console.log('EFETKI raboti li', props);
  });
  console.log('raboti li', props);

  return (
    <div className={classes.Cart}>
        <Scrollbar  
          style={{ width: "100%", height: 560 }}>
          <div className={classes.CartElementsList}>
            { props.foodCartData ? props.foodCartData.map(food => (
                <div key={food.id + "cart"} className={classes.CartFoodElement}>
                    <div className={ classes.CartFoodElementMedia }>
                      <img src={food.imgUrl}/>
                    </div>
                    <div className={ classes.CartFoodElementContent }>
                      <FoodCardContent parent="cart" {...food}/>
                      <button onClick={() => props.removeFromCartList(food)}>Remove product</button>
                    </div>
                </div>  
            )) : ''} 
          </div>
        </Scrollbar>
        <div className={classes.CartContent}>
          <p>Total price: 10.00</p>
          <button>Order</button>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      foodCartData: state.cart.foodCartData,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
      removeFromCartList: (food) => dispatch(removeFoodFromCartList(food))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
