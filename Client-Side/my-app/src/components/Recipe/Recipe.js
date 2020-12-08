import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Recipe.module.css';

import RecipeIngredient from './RecipeIngredient/RecipeIngredient';
import { transform } from '@babel/core';
  
class Recipe extends Component {

    render() {
        let transformedIngredients = Object.keys(this.props.ingredients)
            .map(igKey => {
                return [...Array(this.props.ingredients[igKey])].map((_, i) => {
                    return <RecipeIngredient key={igKey + i} type={igKey}/>;
                });
            })
            .reduce((arr, el) => {
                return arr.concat(el);
            }, [])
       
        if(transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients</p>;
        }

        return (
            <div className={classes.Recipe}>
                <RecipeIngredient type="bread-top"/>
                {transformedIngredients}
                <RecipeIngredient type="bread-bottom"/>
            </div>
        );
    }
        
}

export default Recipe;