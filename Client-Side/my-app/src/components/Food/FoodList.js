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

        componentDidUpdate() {
            if(this.state.foodData !== this.props.food.foodData) {
                this.setState(() => {
                    return { foodData: this.props.food.foodData };
                });
            }
        }

        handleChangePage = (page) => {
            if(!this.props.food.isLimitedFood && page > 0 || this.state.page > 0 && page < 0) {
                this.setState(() => {
                    return {
                        page: this.state.page + page
                    }
                }, () => { 
                    this.props.onGetLimitedFood(this.state.page) 
                });
            } 
        }

        render() {

            const { foodData, page }  = this.state;
            const { isLogged, isAdmin } = this.props;

            const foodCards = foodData ? foodData.map(resFood =>  (
                <FoodCard 
                    key={resFood.id} 
                    isLogged={isLogged} 
                    isAdmin={isAdmin} 
                    food={resFood} 
                    history={this.props.history} />
            )) : '';

            return (
                <div className={classes.FoodList}>
                    <header>
                        <h1>FOOD PRODUCTS</h1>
                    </header>
                    <main className={classes.FoodListBody}>
                        {foodCards}
                    </main>
                    <div className={classes.PageButton}>
                        <span onClick={() => this.handleChangePage(-1)}>previus</span>
                        <p>{page}</p>   
                        <span onClick={() => this.handleChangePage(1)}>next</span>
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