import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './FoodCard.module.css';

class FoodCard extends Component {
    state = {
        isHidden: false
    }

    changeIsHidden = () => {
        const changedIsHidden = !this.state.isHidden;
        this.setState({ isHidden: changedIsHidden });
    }

    render() {
        const { isHidden } = this.state;

        return (
            <div className={classes.FoodCard}>
                <div className={classes.FoodCardMediaContainer}>
                    <img src="https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg"/>
                    {isHidden ? <div className={classes.FoodCardContentContainer}>
                        <p>Calories: 250</p>
                        <p>Protein: 23</p>
                        <p>Fat: 14 </p>
                        <p>Carbohydrate: 34</p>
                    </div> : ''}
                </div>
                <div className={classes.FoodCardHeaderContainer}>
                    <header>
                        <h3>Banana</h3>
                        <p onClick={this.changeIsHidden}>Show Content</p>   
                    </header>
                </div>
            </div>
        );
    }
}

export default FoodCard;