import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './RecipeBuilder.module.css'

import Recipe from '../../components/Recipe/Recipe';

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
            <div className={classes.RecipeBuilder}>
                <Recipe/>
            </div>
               
        );
    }
}

export default RecipeBuilder;