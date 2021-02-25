import React, {useEffect, useState} from 'react';
import classes from './CartProductElement.module.css';

import { connect } from 'react-redux';

import { updateProductInCartList } from '../../../../store/actions/index';

function CartProductElement(props) { 

    const isLogged = localStorage.getItem('isLogged');
    const [productCartElement, setCartElement] = useState({ cartElement: null, value: '' });
    
    useEffect(() => {
        if(JSON.stringify(productCartElement.cartElement) !== JSON.stringify(props)) {
            setCartElement({
                cartElement: {...props},
                value: props.quantity
            });
        }
    });

    const handleChange = (event) => {
        const updatedTotalPrice = Number(event.target.value) * productCartElement.cartElement.price;
        setCartElement({
            totalPrice: updatedTotalPrice,
            value: event.target.value
        });
        props.updatedCartElements(productCartElement.cartElement, event.target.value);
    };

    return (
        <div>
            <p>Name: {props.name}</p>
            {!props.availability ? '' : props.availability.count ?  <p>Price per count: {props.price}lv</p> :  <p>Price per kg: {props.price}lv</p>}
            {!props.availability ? '' : props.availability.count ? <p>Availability: {props.availability.count} counts</p> : <p>Availability: {props.availability.quantity}kg</p>}
            <div className={ classes.CartProductElementContentForm} >
                    <label>Quantity:</label>
                <input onChange={handleChange} name="quantity" value={productCartElement.value}/>
              </div>
            <p>Product price: {props.totalPrice}</p>
        </div>)

}

const mapDispatchToProps = (dispatch) => {
  return {
      updatedCartElements: (product, quantity) => dispatch(updateProductInCartList(product, quantity))
  }
};
  
export default connect(null, mapDispatchToProps)(CartProductElement);
