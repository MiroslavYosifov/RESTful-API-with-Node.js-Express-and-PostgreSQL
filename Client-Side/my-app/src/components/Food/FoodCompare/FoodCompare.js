import React, { Component } from 'react';
import classes from './FoodCompare.module.css';

import FoodCardContent from '../FoodCard/FoodCardContent/FoodCardContent';

class FoodCompare extends Component {
    state = {
        foodData: [],
    }

    componentDidMount () {
        this.setState(() => {
            return { foodData: this.props.foodCompareData}
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.foodData !== this.props.foodCompareData) {
            this.setState(() => {
                return { foodData: this.props.foodCompareData }
            })
        }
    }

    render() {
        return (
            <div className={classes.FoodCompare}>
                <header>
                    <h2>Compare Table</h2>
                </header>
                <div className={classes.FoodCompareTable}>
                    {this.state.foodData.map(food => (
                        <div key={food.id + 'b'} className={classes.FoodCompareCardContent}>
                            <FoodCardContent  {...food}/>
                        </div>
                    ))}
                </div>
            </div>
            
        );
    }
}

export default FoodCompare;