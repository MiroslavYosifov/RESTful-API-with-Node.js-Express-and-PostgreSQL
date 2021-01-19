    import React, { Component } from 'react';
    import classes from './FoodList.module.css';

    import { withRouter } from 'react-router-dom';
    import { connect } from 'react-redux';

    import { getFoods, getLimitedFoods } from '../../store/actions/index';

    import FoodCard from './FoodCard/FoodCard';
    import Spinner from '../UI/Spinner/Spinner';

    class FoodList extends Component {
        state = {
            foodData: [],
            page: 0,
        }

        componentDidMount () {
            if(!this.props.food.isLimitedFood) {
                this.props.onGetLimitedFood(0);
            }
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.state.foodData !== this.props.food.foodData) {
                this.setState(() => {
                    return { foodData: this.props.food.foodData };
                });
            }
        }

        handlePreviusPage = () => {
            if(this.state.page > 0) {
                this.setState({
                    page: this.state.page - 1
                }, () => { this.props.onGetLimitedFood(this.state.page) })
                
            }
        }

        handleNextPage = () => {
            if(!this.props.food.isLimitedFood) {
                this.setState(() => {
                    return {
                        page: this.state.page + 1
                    }
                }, () => { 
                    this.props.onGetLimitedFood(this.state.page) 
                });
            } 
        }

        render() {
            const { foodData, page }  = this.state;
            const { isLogged, isAdmin } = this.props;
            return (
                <div className={classes.FoodList}>
                    {foodData ? foodData.map(resFood =>  (
                        <FoodCard key={resFood.id} isLogged={isLogged} isAdmin={isAdmin} food={resFood} history={this.props.history} />
                    )) : ''}
                    <div className={classes.PageButton}>
                        <span onClick={() => this.handlePreviusPage()}>previus</span>
                        <p>{page}</p>   
                        <span onClick={() => this.handleNextPage()}>next</span>
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
            onGetLimitedFood: (page) => dispatch(getLimitedFoods(page)),
        }
    };

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FoodList));