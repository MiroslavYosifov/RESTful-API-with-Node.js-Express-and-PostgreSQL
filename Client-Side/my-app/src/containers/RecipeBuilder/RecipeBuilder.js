import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import styles from './RecipeBuilder.module.css'

import Recipe from '../../components/Recipe/Recipe';
import BuildControls from '../../components/Recipe/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class RecipeBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    }

    removeIngredientHandler = (type) => {
        if(this.state.ingredients[type] > 0) {
            const oldCount = this.state.ingredients[type];
            const updatedCounted = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
    
            updatedIngredients[type] = updatedCounted;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
    
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        } else {
            console.log('No ingredients',this.state.ingredients[type]);
        }
    }
        

    render() {
        const disbaledInfo = {
            ...this.state.ingredients
        };

        for (const key in disbaledInfo) {
            disbaledInfo[key] = disbaledInfo[key] <= 0;
        }

        return (
            <Auxiliary>
                <Recipe ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disbaledInfo}
                    totalPrice={this.state.totalPrice}
                />
            </Auxiliary>
        );
    }
}

export default RecipeBuilder;