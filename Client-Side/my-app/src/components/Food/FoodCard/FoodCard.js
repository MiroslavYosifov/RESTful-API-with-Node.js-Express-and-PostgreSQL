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
        const { calories, carbohydrate, fat, protein, imgUrl, name, kind } = this.props;

        return (
            <div className={classes.FoodCard}>
                <div className={classes.FoodCardMediaContainer}>
                    <img src={imgUrl}/>
                    {isHidden ? <div className={classes.FoodCardContentContainer}>
                        <p>Kind: {kind}</p>
                        <p>Calories: {calories}</p>
                        <p>Protein: {protein}</p>
                        <p>Fat: {fat}</p>
                        <p>Carbohydrate: {carbohydrate}</p>
                    </div> : ''}
                </div>
                <div className={classes.FoodCardHeaderContainer}>
                    <header>
                        <h3>{name}</h3>
                        <p onClick={this.changeIsHidden}>{!isHidden ? 'Show content' : 'Hide content'}</p>   
                    </header>
                </div>
            </div>
        );
    }
}

export default FoodCard;