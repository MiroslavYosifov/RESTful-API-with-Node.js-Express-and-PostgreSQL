import React from 'react';

const foodCardContent = (props) => { 
    console.log('CONTENT FOOD',props);

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
                    <p>Price: {props.price}</p>
                    {!props.availability ? '' : props.availability.count ? <p>Count: <b>{props.availability.count}</b></p> : <p>Quantity: <b>{props.availability.quantity}</b></p>}
                </div>)
        default: 
            return(<div>NOT EXIST PARENT</div>)
    }
    // return (
        
    // )

}

export default foodCardContent;