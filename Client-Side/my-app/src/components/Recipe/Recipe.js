import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './Recipe.module.css';

import CounterControl from './CounterControl/CounterControl';
import CounterOutput from './CounterOutput/CounterOutput';
  
class Recipe extends Component {

    render() {

        return (
            <div className={classes.Recipe}>
                <h1>Recipe</h1>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add" clicked={this.props.onAddCounter} />
                <CounterControl label="Substract" clicked={this.props.onSubstractCounter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT'}),
        onAddCounter: () => dispatch({ type: 'ADD', val: 10 }),
        onSubstractCounter: () => dispatch({ type: 'SUBSTRACT', val: 5 })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Recipe);