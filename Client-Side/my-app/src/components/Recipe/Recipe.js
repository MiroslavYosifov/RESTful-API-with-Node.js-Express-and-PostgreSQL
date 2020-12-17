import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Recipe.module.css';
  
class Recipe extends Component {

    render() {

        return (
            <div className={classes.Recipe}>
                <h1>Recipe</h1>
            </div>
        );
    }
        
}

export default Recipe;