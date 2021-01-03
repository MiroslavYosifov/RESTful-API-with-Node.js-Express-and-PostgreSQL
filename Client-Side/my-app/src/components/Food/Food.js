import React, { Component } from 'react';
import classes from './Food.module.css';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import foodService from '../../services/food-service';
import { getFoods } from '../../store/actions/index';

import FoodAddForm from './FoodForms/FoodAddForm/FoodAddForm';
import FoodCard from './FoodCard/FoodCard';

class Food extends Component {

    componentDidMount () {
        this.props.onGetFood();
    }

    render() {
        const { foodData } = this.props.food;
        
        return (
            <div className={classes.Food}>
                <FoodAddForm {...this.props}/>
                <div className={classes.FoodContainer}>
                    {foodData ? foodData.map(food =>  (
                        <FoodCard key={food.id} {...food}/>
                    )) : ''}
                    
                </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Food));