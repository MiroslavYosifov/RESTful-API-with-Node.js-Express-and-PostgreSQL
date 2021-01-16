import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css';

import Scrollbar from 'react-scrollbars-custom';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeFoodFromCartList } from '../../../store/actions/index';

import FoodCardContent from '../../Food/FoodCard/FoodCardContent/FoodCardContent';
import Modal from '../Modal/Modal';
import AuthLoginForm from '../../Auth/Forms/AuthLoginForm/AuthLoginForm'

function Cart(props) {
  // const isLogged = localStorage.getItem('isLogged');
  // const [foodCartData, setCartData] = useState({ data: null });
  console.log(props);
  const [checkOrder, setOrder] = useState({ showModal: false });

  function handleOrder () {
      if(!props.isLogged) {
        setOrder({
          showModal: true
        });
      } else {
        setOrder({
          showModal: false
        })
        console.log(props.foodCartData);
      }
  }

  function closeModal () {
    setOrder({
      showModal: false
    });
  }
  
  return (
    <div className={classes.Cart}>
        { !props.isLogged && checkOrder.showModal ? <Modal messagge="You must be login if you want to make a order!">
          <AuthLoginForm />
          <button onClick={() => closeModal()}>Close</button>
        </Modal> : '' }
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
          <p>Total price: {props.foodTotalPrice}</p>
          <button onClick={() => handleOrder()}>Order</button>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      foodCartData: state.cart.foodCartData,
      foodTotalPrice: state.cart.totalPrice
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
      removeFromCartList: (food) => dispatch(removeFoodFromCartList(food)),
      // updatedCartElements: (food, quantity) => dispatch(updatedCartElementsList(food, quantity))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
