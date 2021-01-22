import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css';

import Scrollbar from 'react-scrollbars-custom';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeProductFromCartList } from '../../../store/actions/index';

import FoodContent from '../../Food/FoodContent/FoodContent';
import Modal from '../Modal/Modal';
import AuthLoginForm from '../../Auth/Forms/AuthLoginForm/AuthLoginForm'

function Cart(props) {

  const [checkOrder, setOrder] = useState({ showModal: false });

  function handleOrder () {
    props.isLogged 
      ? setOrder({ showModal: true })                
      : setOrder({ showModal: false });
  }

  function closeModal () {
    setOrder({ showModal: false });
  }
  console.log('TUKA SUM', props.productsData);
  const productsList = props.productsData ? props.productsData.map(food => (
      <div key={food.id + "cart"} className={classes.CartFoodElement}>
          <div className={ classes.CartFoodElementMedia }>
            <img src={food.imgUrl}/>
          </div>
          <div className={ classes.CartFoodElementContent }>
            <FoodContent parent="cart" {...food}/>
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
