import React from 'react';
import classes from './Toolbar.module.css';
import { Link } from 'react-router-dom';

import AuthLogoutForm from '../../Auth/Forms/AuthLogoutForm/AuthLogoutForm';
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
    //const { isLogged } = props;
    const { isLogged } = props;
    const username = localStorage.getItem('username');
    console.log(props);
    return (
        <header className={classes.Toolbar}>
            {/* <div>MENU</div> */}
            <Logo/>
            <nav>
                <ul>
                    <li><Link to="/food">Food</Link></li>
                    <li><Link to="/workout">Workout</Link></li>
                    {isLogged ? <li><Link to="/myprofile">Hello {username} :)</Link></li> : '' }
                    {!isLogged ? <li><Link to="/auth">Sign in</Link></li> : <li><AuthLogoutForm history={props.history}/></li> }
                </ul>
            </nav>
        </header>
    );
} 
  
export default toolbar;