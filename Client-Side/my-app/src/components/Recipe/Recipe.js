import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Recipe.module.css';

import CounterControl from './CounterControl/CounterControl';
import CounterOutput from './CounterOutput/CounterOutput';

import { increment, decrement, add, substract, storeResult, deleteResult } from '../../store/actions/actions';
import * as actionTypes from '../../store/actions/actions';
  
class Recipe extends Component {

    render() {
        console.log()
        return (
            <div className={classes.Recipe}>
                <h1>Recipe</h1>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add" clicked={this.props.onAddCounter} />
                <CounterControl label="Substract" clicked={this.props.onSubstractCounter} />
                <hr></hr>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((storedResult, index) => (
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>Results{index}: {storedResult.value} </li>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: () => dispatch(add()),
        // onSubstractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, val: 5 }),
        onSubstractCounter: () => dispatch(substract()),
        // onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Recipe);