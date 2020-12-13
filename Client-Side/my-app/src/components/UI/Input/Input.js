import React, { Component } from 'react';
import classes from './Input.module.css';
import PropTypes from 'prop-types';


const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case('input'):
            inputElement = <input 
                {...props.elementConfig}
                vale={props.value}/>;
            break;
        case('textarea'):
            inputElement = <textarea 
                {...props.elementConfig}
                vale={props.value}/>;
            break;
        default:
            inputElement = <input 
                {...props.elementConfig}
                vale={props.value}/>;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    );

}


export default input;