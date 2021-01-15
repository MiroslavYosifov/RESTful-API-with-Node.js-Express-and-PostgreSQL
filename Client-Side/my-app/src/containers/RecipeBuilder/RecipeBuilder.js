import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import styles from './RecipeBuilder.module.css'

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
            <Auxiliary>
                <Recipe/>
            </Auxiliary>
        );
    }
}

export default RecipeBuilder;