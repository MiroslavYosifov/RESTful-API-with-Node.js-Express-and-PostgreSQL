    import React, { Component } from 'react';
    import classes from './FoodList.module.css';

    import { withRouter } from 'react-router-dom';
    import { connect } from 'react-redux';

    import foodService from '../../services/food-service';
    import { getFoods } from '../../store/actions/index';

    import FoodAddForm from './FoodForms/FoodAddForm/FoodAddForm';
    import FoodEditForm from './FoodForms/FoodEditForm/FoodEditForm';

    import FoodCard from './FoodCard/FoodCard';
    import Spinner from '../UI/Spinner/Spinner';
    import { loadPartialConfig } from '@babel/core';

    class FoodList extends Component {
        state = {
            foodData: []
        }

        componentDidMount () {
            this.props.onGetFood();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.state.foodData !== this.props.food.foodData) {
                this.setState(() => {
                    return { foodData: this.props.food.foodData };
                });
               
            }
        }

        render() {
            const foodData  = this.state.foodData;
            return (
                <div className={classes.Food}>
                    <FoodAddForm {...this.props}/>
                    <div className={classes.FoodContainer}>
                        {foodData ? foodData.map(food =>  (
                            <FoodCard key={food.id} food={food} history={this.props.history} />
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

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FoodList));