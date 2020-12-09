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
                <p>FOOOOOOOOOOOD</p>
                <Food></Food>
            </div>
        );
    }
}

export default FoodBuilder;