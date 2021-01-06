import React, { Component } from 'react';
import  classes from './FoodBuilder.module.css';

import FoodList from '../../components/Food/FoodList';
import FoodAddForm from '../../components/Food/FoodForms/FoodAddForm/FoodAddForm'
import FoodCompare from '../../components/Food/FoodCompare/FoodCompare';
import { INCREMENT } from '../../store/actions/actionsTypes';

class FoodBuilder extends Component {
    constructor (props) {
        super(props)
    }

    state = {
        isUpdatedCompareCmp: true,
        foodCompareData: []
    }

    componentDidUpdate () {

    }

    updateFoodCompareData = (data) => {

        const updatedData = this.state.foodCompareData;
        const isExist = updatedData.some(food => food.id === data.id);
        
        if(!isExist) {
            updatedData.push(data);
            this.setState(() => {
                return { foodCompareData: updatedData, isUpdatedCompareCmp: !this.state.isUpdatedCompareCmp };
            })
        } else {
            console.log('FOOD EXIST');
        }
    }

    render() {
        console.log(this.state.foodCompareData);
        return (
            <div className={classes.FoodBuilder}>
                <h1>I AM FOODBUILDER COMPONENT</h1>
                {/* <FoodAddForm/> */}
                <FoodCompare key={this.state.isUpdatedCompareCmp} {...this.state}/>
                <FoodList updateFoodCompareData={this.updateFoodCompareData}/>
            </div>
        );
    }
}

export default FoodBuilder;