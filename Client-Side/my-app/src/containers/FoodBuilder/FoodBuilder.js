import React, { Component } from 'react';
import  classes from './FoodBuilder.module.css';

import FoodList from '../../components/Food/FoodList';


class FoodBuilder extends Component {
    constructor (props) {
        super(props)
    }


    render() {
        return (
            <div className={classes.FoodBuilder}>
                <h1>I AM FOODBUILDER COMPONENT</h1>
                <FoodList/>
            </div>
        );
    }
}

export default FoodBuilder;