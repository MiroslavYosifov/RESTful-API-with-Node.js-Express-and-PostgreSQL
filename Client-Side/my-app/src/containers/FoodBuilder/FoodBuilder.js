import React, { Component } from 'react';
import  classes from './FoodBuilder.module.css';

import Food from '../../components/Food/Food';


class FoodBuilder extends Component {
    constructor (props) {
        super(props)
    }


    render() {

        return (
            <div className={classes.FoodBuilder}>
                <h1>I AM FOODBUILDER COMPONENT</h1>
                <Food/>
            </div>
        );
    }
}

export default FoodBuilder;