import React from 'react'
import classes from './Logo.module.css';

import logoOrganizer from '../../assets/images/ORGANIZER.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoOrganizer}/>
    </div>
);

export default logo;