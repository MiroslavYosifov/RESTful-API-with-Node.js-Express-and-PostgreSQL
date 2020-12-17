import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Workout extends Component {

    render() {
        return (
            <div>
                <p>{this.props.exercise}</p>
                <h3>IT IS THE COUNTER: {this.props.ctr}</h3>
            </div>
        );
    }
        
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

export default connect(mapStateToProps)(Workout);