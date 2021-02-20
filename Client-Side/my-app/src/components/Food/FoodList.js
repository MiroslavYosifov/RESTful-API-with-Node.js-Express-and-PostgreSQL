import React, { Component, useState, useEffect, useCallback } from 'react';
import classes from './FoodList.module.css';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFoods, getLimitedFoods } from '../../store/actions/index';

import FoodCard from './FoodCard/FoodCard';
import Spinner from '../UI/Spinner/Spinner';
import PageHeader from '../UI/PageHeader/PageHeader';

const FoodList = React.memo(props => {

    const [foods, setFoodData] = useState({ data: [] });
    const [page, setPage] = useState({ count: 0 });
    const { isLogged, isAdmin, isLoading } = props;

    useEffect(() => {
        if(foods.data !== props.food.foodData) {
            setFoodData({ data: props.food.foodData });
        }
    });

    useEffect(() => {
        props.onGetLimitedFood(page.count);
    }, [page]);

    const handleChangePage = (page, pageCount) => {
        if(!props.food.isLimitedFood && page > 0 || pageCount > 0 && page < 0) {
            setPage({ count: pageCount + page });
        }
    }

    const foodCards = foods.data ? foods.data.map(resFood =>  (
        <FoodCard 
            key={resFood.id} 
            isLogged={isLogged} 
            isAdmin={isAdmin} 
            food={resFood} 
            history={props.history} />
    )) : '';

    return ( 
        <div className={classes.FoodList}>
            <PageHeader pageName="Food Products"/>
            <main className={classes.FoodListBody}>
                {isLoading ? <Spinner/> : foodCards}
            </main>
            <div className={classes.PageButton}>
                <span onClick={() => handleChangePage(-1, page.count)}>previus</span>
                <p>{page.count}</p>   
                <span onClick={() => handleChangePage(1, page.count)}>next</span>
            </div>
        </div>
    );
});

const mapStateToProps = state => {
    return {
        food: state.food,
        isLoading: state.food.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetFood: () => dispatch(getFoods()),
        onGetLimitedFood: (page) => dispatch(getLimitedFoods(page)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FoodList));