import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './RecipeBuilder.css'


class RecipeBuilder extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <Auxiliary>
                <div>Recipe</div>
                <div>Recipe Controls</div>
            </Auxiliary>
        );
    }
}

export default RecipeBuilder;