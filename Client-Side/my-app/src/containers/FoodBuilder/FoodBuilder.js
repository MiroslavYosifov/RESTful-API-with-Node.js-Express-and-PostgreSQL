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
            <header>
                <h1>FOODBUILDER CONTAINER</h1>
            </header>
            { isLogged && isAdmin ? <FoodAddForm/> : '' }
            <FoodCompare foodCompareData={props.foodCompareData}/>
            <FoodList/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        foodCompareData: state.foodCompare.foodCompareData,
    };
};

export default withRouter(connect(mapStateToProps)(FoodBuilder));