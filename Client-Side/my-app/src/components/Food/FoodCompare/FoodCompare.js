import React, { Component } from 'react';
import classes from './FoodCompare.module.css';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import foodService from '../../services/food-service';
import { getFoods } from '../../store/actions/index';

import FoodAddForm from './FoodForms/FoodAddForm/FoodAddForm';
import FoodEditForm from './FoodForms/FoodEditForm/FoodEditForm';

import FoodCard from './FoodCard/FoodCard';
import Spinner from '../UI/Spinner/Spinner';
import { loadPartialConfig } from '@babel/core';

class FoodCompare extends Component {
    state = {
        foodCompareData: []
    }

    componentDidMount () {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    render() {
        const foodData  = this.state.foodData;
        return (
            <div className={classes.FoodCompare}>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        food: state.food,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetFood: () => dispatch(getFoods()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FoodCompare));