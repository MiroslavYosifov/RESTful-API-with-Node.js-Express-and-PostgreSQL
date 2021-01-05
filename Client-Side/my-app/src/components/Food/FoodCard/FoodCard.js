import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './FoodCard.module.css';

import FoodEditForm from '../FoodForms/FoodEditForm/FoodEditForm';

class FoodCard extends Component {
    state = {
        isHidden: false,
        isEditFormHidden: false
    }

    changeIsHidden = () => {
        const changedIsHidden = !this.state.isHidden;
        this.setState({ isHidden: changedIsHidden });
    }

    changeIsEditFormHidden = () => {
        const changedIsEditFormHidden = !this.state.isEditFormHidden;
        this.setState({ isEditFormHidden: changedIsEditFormHidden });
    }

    render() {
        const { isHidden, isEditFormHidden } = this.state;
        const { calories, carbohydrate, fat, protein, imgUrl, name, kind } = this.props.food;
        //console.log(this.props)
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
                    {isEditFormHidden ? <FoodEditForm key={this.props.food.id+'a'} {...this.props}/> : ''}
                </div>
                <div className={classes.FoodCardHeaderContainer}>
                    <header>
                        <h3>{name}</h3>
                        {!isEditFormHidden ? <p onClick={this.changeIsHidden}>{!isHidden ? 'Show content' : 'Hide content'}</p> : ''}
                        {isHidden ? <p onClick={this.changeIsEditFormHidden}>{!isEditFormHidden ? 'Show Edit' : 'Hide Edit'}</p> : ''}
                    </header>
                </div>
            </div>
        );
    }
}

export default FoodCard;