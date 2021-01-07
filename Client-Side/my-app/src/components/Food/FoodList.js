    import React, { Component } from 'react';
    import classes from './FoodList.module.css';

    import { withRouter } from 'react-router-dom';
    import { connect } from 'react-redux';

    import { getFoods } from '../../store/actions/index';

    import FoodCard from './FoodCard/FoodCard';
    import Spinner from '../UI/Spinner/Spinner';

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
                <div className={classes.FoodList}>
                    {foodData ? foodData.map(resFood =>  (
                        <FoodCard key={resFood.id} food={resFood} history={this.props.history} updateFoodCompareData={this.props.updateFoodCompareData}/>
                    )) : ''}
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