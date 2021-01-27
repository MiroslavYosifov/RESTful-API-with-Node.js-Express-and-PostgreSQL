import React from 'react';
import classes from './PageHeader.module.css';

const pageHeader = (props) => (
    <header className={classes.PageHeader}>
        <h1>{props.pageName}</h1>
    </header>
);

export default pageHeader;