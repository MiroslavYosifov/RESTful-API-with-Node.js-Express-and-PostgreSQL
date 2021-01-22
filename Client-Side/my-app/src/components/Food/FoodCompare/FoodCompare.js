import React, { Component } from 'react';
import classes from './FoodCompare.module.css';

// import { connect } from 'react-redux';

import FoodContent from '../FoodContent/FoodContent';

class FoodCompare extends Component {
    
    render() {
        const { foodCompareData } = this.props;
        return (
            <div className={classes.FoodCompare}>
                <header>
                    <h2>Compare Table</h2>
                </header>
                <div className={classes.FoodCompareTable}>
                    {foodCompareData ? this.props.foodCompareData.map(food => (
                        <div key={food.id + 'b'} className={classes.FoodCompareCardContent}>
                            <FoodContent parent="foodCompare" {...food}/>
                        </div>
                    )) : ''}
                </div>
            </div>
            
        );
    }
}

export default FoodCompare;