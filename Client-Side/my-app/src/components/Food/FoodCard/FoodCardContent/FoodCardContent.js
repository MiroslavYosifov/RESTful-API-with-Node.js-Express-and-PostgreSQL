import React from 'react';

const foodCardContent = (props) => { 
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Kind: {props.kind}</p>
            <p>Calories: {props.calories}</p>
            <p>Protein: {props.protein}</p>
            <p>Fat: {props.fat}</p>
            <p>Carbohydrate: {props.carbohydrate}</p>
        </div>
    )
}



export default foodCardContent;