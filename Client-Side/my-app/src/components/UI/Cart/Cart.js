import React, { useState, useEffect } from 'react';
import classes from './Cart.module.css';

import Scrollbar from 'react-scrollbars-custom';

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
        <div className={classes.CartElementsList}>
        <Scrollbar  
          style={{ width: 400, height: 540 }}>
          { props.foodCartData ? props.foodCartData.map(food => (
                <div key={food.id + "cart"} className={classes.CartFoodElement}>
                    <div className={ classes.CartFoodElementMedia }>
                      <img src={food.imgUrl}/>
                    </div>
                    <div className={ classes.CartFoodElementContent }>
                      <FoodCardContent {...food}/>
                    </div>
                </div>  
            )) : ''}
         </Scrollbar>
        </div>
        <div>
          <p>Total price: 10.00</p>
          <button>Bye food products</button>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      foodCartData: state.foodCart.foodCartData,
  };
};

export default withRouter(connect(mapStateToProps)(Cart));
