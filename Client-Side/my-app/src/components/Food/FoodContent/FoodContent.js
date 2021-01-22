import React, {useEffect, useState} from 'react';
import classes from './FoodContent.module.css';

import { connect } from 'react-redux';

import { updateProductInCartList } from '../../../store/actions/index';

function FoodContent(props) { 

    const isLogged = localStorage.getItem('isLogged');
    const [foodCartElement, setCartElement] = useState({ cartElement: null, value: '' });
    
    useEffect(() => {
        console.log(props);
        if(JSON.stringify(foodCartElement.cartElement) !== JSON.stringify(props)) {
            setCartElement({
                cartElement: {...props},
                value: props.quantity
            });
        }
    });

    function handleChange(event) {
        const updatedTotalPrice = Number(event.target.value) * foodCartElement.cartElement.price;
        setCartElement({
            totalPrice: updatedTotalPrice,
            value: event.target.value
        });
        props.updatedCartElements(foodCartElement.cartElement, event.target.value);
    };

    switch(props.parent) {
        case "foodCard":
            return(
                <div>
                    <p>Name: {props.name}</p>
                    <p>Kind: {props.kind}</p>
                    <p>Calories: {props.calories}</p>
                    <p>Protein: {props.protein}</p>
                    <p>Fat: {props.fat}</p>
                    <p>Carbohydrate: {props.carbohydrate}</p>
                    <p>Price: {props.price}</p>
                </div>)
        case "foodCompare":
            return(
                <div>
                    <p>Name: {props.name}</p>
                    <p>Kind: {props.kind}</p>
                    <p>Calories: {props.calories}</p>
                    <p>Protein: {props.protein}</p>
                    <p>Fat: {props.fat}</p>
                    <p>Carbohydrate: {props.carbohydrate}</p>
                    <p>Price: {props.price}</p>
                </div>)
        case "cart":
            return(
                <div>
                    <p>Name: {props.name}</p>
                    {!props.availability ? '' : props.availability.count ?  <p>Price per count: {props.price}lv</p> :  <p>Price per kg: {props.price}lv</p>}
                    {!props.availability ? '' : props.availability.count ? <p>Availability: {props.availability.count} counts</p> : <p>Availability: {props.availability.quantity}kg</p>}
                    <div className={ classes.CartFoodElementContentForm} >
                        <label>Quantity:</label>
                        <input onChange={handleChange} name="quantity" value={foodCartElement.value}/>
                      </div>
                    <p>Product price: {props.totalPrice}</p>
                </div>)
        default: 
            return(<div>NOT EXIST PARENT</div>)
    }
    // return (
        
    // )

}

const mapDispatchToProps = (dispatch) => {
  return {
      updatedCartElements: (food, quantity) => dispatch(updateProductInCartList(food, quantity))
  }
};
  
export default connect(null, mapDispatchToProps)(FoodContent);
