import React, {useEffect, useState} from 'react';
import classes from './FoodContent.module.css';

import { connect } from 'react-redux';

import { updateProductInCartList } from '../../../store/actions/index';

function FoodContent(props) { 

    const isLogged = localStorage.getItem('isLogged');
    const [foodCartElement, setCartElement] = useState({ cartElement: null, value: '' });
    
    useEffect(() => {
        if(JSON.stringify(foodCartElement.cartElement) !== JSON.stringify(props)) {
            setCartElement({
                cartElement: {...props},
                value: props.quantity
            });
        }
    });

    const handleChange = (event) => {
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
        default: 
            return(<div>NOT EXIST PARENT</div>)
    }
    // return (
        
    // )

}

export default FoodContent;
