import React, { Component } from 'react';
import classes from './Input.module.css';
import PropTypes from 'prop-types';


const input = (props) => {

    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    );

}

export default input;