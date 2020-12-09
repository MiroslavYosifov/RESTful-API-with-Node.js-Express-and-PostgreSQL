import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Workout extends Component {

    render() {
        return (
            <div>
                <p>{this.props.exercise}</p>
            </div>
        );
    }
        
}

export default Workout;