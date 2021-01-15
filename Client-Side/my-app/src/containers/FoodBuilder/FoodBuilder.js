import React, { Component, useEffect, useState } from 'react';
import  classes from './FoodBuilder.module.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FoodList from '../../components/Food/FoodList';
import FoodAddForm from '../../components/Food/FoodForms/FoodAddForm/FoodAddForm'
import FoodCompare from '../../components/Food/FoodCompare/FoodCompare';

function FoodBuilder(props) {
    const { isLogged, isAdmin } = props;

    return (
        <div className={classes.FoodBuilder}>
            { isLogged && isAdmin ? <FoodAddForm/> : '' }
            {props.foodCompareData.length > 0 ? <FoodCompare foodCompareData={props.foodCompareData}/> : ''}
            <header>
                <h1>FOOD PRODUCTS</h1>
            </header>
            <FoodList isLogged={isLogged} isAdmin={isAdmin}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        foodCompareData: state.foodCompare.foodCompareData,
    };
};

export default withRouter(connect(mapStateToProps)(FoodBuilder));