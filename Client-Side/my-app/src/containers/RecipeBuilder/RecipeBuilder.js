import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import styles from './RecipeBuilder.module.css'

import Recipe from '../../components/Recipe/Recipe';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class RecipeBuilder extends Component {
    // ESC6
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }

    state = {

    }

   
    render() {
        return (
            <Auxiliary>
                <Recipe/>
            </Auxiliary>
        );
    }
}

export default RecipeBuilder;