import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Food.module.css';

import foodService from '../../services/food-service';

import FoodForm from './FoodForm/FoodForm';

class Food extends Component {

    render() {
        return (
            <div className={classes.Food}>
                <FoodForm/>
            </div>
        );
    }
}

export default withRouter(Food);