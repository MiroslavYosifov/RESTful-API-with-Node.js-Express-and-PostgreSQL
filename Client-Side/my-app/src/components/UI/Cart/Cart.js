import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css';

import Scrollbar from 'react-scrollbars-custom';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeProductFromCartList } from '../../../store/actions/index';

import FoodContent from '../../Food/FoodContent/FoodContent';
import CartProductElement from './CartProductElement/CartProductElement';
import Modal from '../Modal/Modal';
import AuthLoginForm from '../../Auth/Forms/AuthLoginForm/AuthLoginForm'

function Cart(props) {

  const [checkOrder, setOrder] = useState({ showModal: false });

  const handleOrder = () => {
    props.isLogged 
      ? setOrder({ showModal: false })                
      : setOrder({ showModal: true });
  }

  const closeModal = () => {      
      setOrder({ showModal: false });
  }


  const productsList = props.productsData ? props.productsData.map(food => (
    <div key={food.id + "cart"} className={classes.CartFoodElement}>
        <div className={ classes.CartFoodElementMedia }>
          <img src={food.imgUrl}/>
        </div>
        <div className={ classes.CartFoodElementContent }>
          <CartProductElement {...food}/>
          <button onClick={() => props.removeFromCartList(food)}>Remove product</button>
        </div>
    </div>  
  )) : '';

  return (
    <div className={classes.Cart}>
        { !props.isLogged && checkOrder.showModal
          ? <Modal messagge="You must be login if you want to make a order!">
              <AuthLoginForm />
              <button onClick={() => closeModal()}>Close</button>
            </Modal> 
          : '' }

        <Scrollbar  style={{ width: "100%", height: 560 }}>
          <div className={classes.CartElementsList}>
            {productsList} 
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
      productsData: state.cart.productsCartData,
      foodTotalPrice: state.cart.totalPrice
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
      removeFromCartList: (food) => dispatch(removeProductFromCartList(food)),
      // updatedCartElements: (food, quantity) => dispatch(updatedCartElementsList(food, quantity))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
