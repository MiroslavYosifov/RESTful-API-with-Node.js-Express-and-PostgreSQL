import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            <ul>
                <li><Link to="/workout">Workout</Link></li>
                <li><Link to="/recipe">Recipe</Link></li>
                <li><Link to="/food">Food</Link></li>     
            </ul>
        </nav>
    </header>
);
  
export default toolbar;