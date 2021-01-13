import React from 'react';
import classes from './Toolbar.module.css';
import { Link } from 'react-router-dom';

import AuthLogoutForm from '../../Auth/Forms/AuthLogoutForm/AuthLogoutForm';

const toolbar = (props) => {
    const { isLogged } = props;
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div>LOGO</div>
            <nav>
                <ul>
                    <li><Link to="/workout">Workout</Link></li>
                    <li><Link to="/recipe">Recipe</Link></li>
                    <li><Link to="/food">Food</Link></li>
                    {!isLogged ? <li><Link to="/auth">Sign in</Link></li> : <li><AuthLogoutForm/></li> }
                </ul>
            </nav>
        </header>
    );
} 
  
export default toolbar;