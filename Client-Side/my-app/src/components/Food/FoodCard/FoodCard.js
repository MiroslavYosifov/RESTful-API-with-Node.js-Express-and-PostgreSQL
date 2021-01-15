import React, { Component } from 'react';
import classes from './FoodCard.module.css';

import { connect } from 'react-redux';

import { addFoodToCompareList, deleteFood } from '../../../store/actions/index';

import FoodEditForm from '../FoodForms/FoodEditForm/FoodEditForm';
import FoodCardContent from './FoodCardContent/FoodCardContent';

export class FoodCard extends Component {
    state = {
        isHidden: false,
        isEditFormHidden: false,
        food: {
            calories: '',
            carbohydrate: '',
            fat: '', 
            protein: '',
            imgUrl: '', 
            name: '', 
            kind: '',
            price: '',
            availability: null
        }
    }

    componentDidMount () {
        this.setState(() => {
            return { food: this.props.food };
        })
    }

    componentDidUpdate (prevState) {
        console.log(this.props.food)
        if (this.state.food !== this.props.food) {
            this.setState(() => {
                return { isHidden: false, isEditFormHidden: false, food: this.props.food };
            })
        }
        console.log(this.state.food)
    }

    changeIsHidden = () => {
        const changedIsHidden = !this.state.isHidden;
        this.setState({ isHidden: changedIsHidden });
    }

    changeIsEditFormHidden = () => {
        const changedIsEditFormHidden = !this.state.isEditFormHidden;
        this.setState({ isEditFormHidden: changedIsEditFormHidden });
    }

    showDefaultCard = () => {
        this.setState({ isEditFormHidden: false, isHidden: false });
    }

    render() {
        const { isHidden, isEditFormHidden } = this.state;
        const { imgUrl, name, price, availability } = this.state.food;
        const { isLogged, isAdmin } = this.props;
        console.log(availability);
        return (
            <div className={classes.FoodCard}>
                <div className={classes.FoodCardMediaContainer}>
                    <img src={imgUrl} alt=""/>
                    {isHidden ? 
                        <div className={classes.FoodCardContentContainer}>
                            <FoodCardContent {...this.state.food}/>
                        </div> : ''}
                    {isEditFormHidden ? <FoodEditForm key={this.props.food.id+'a'} {...this.props}/> : ''}
                </div>
                <div className={classes.FoodCardHeaderContainer}>
                    <header>
                        <h3>{name}</h3>
                        <div>
                            {!availability ? '' : availability.count ? <p>Count: <b>{availability.count}</b></p> : <p>Quantity: <b>{availability.quantity}</b></p>}
                            <p>Price: <b>{price}lv.</b></p>
                        </div> 
                    </header>
                    <div className={classes.FoodCardNavigationContainer}>
                        <p onClick={this.changeIsHidden}>{!isHidden ? 'Show content' : 'Hide content'}</p>
                        {<p onClick={() => this.props.addToCompareList(this.state.food)} >Compare</p>}
                        { isAdmin && isLogged ? <p onClick={this.changeIsEditFormHidden}>{!isEditFormHidden ? 'Show Edit' : 'Hide Edit'}</p> : ''}
                        { isAdmin && isLogged && <p onClick={() => this.props.onDelete(this.state.food)}>Delete</p>}
                        {isHidden || isEditFormHidden  ? <p onClick={this.showDefaultCard}>Close</p> : ''}
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         foodCompareData: state.foodCompare.foodCompareData
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        addToCompareList: (food) => dispatch(addFoodToCompareList(food)),
        onDelete: (food) => dispatch(deleteFood(food)),
    }
};

export default connect(null, mapDispatchToProps)(FoodCard);
