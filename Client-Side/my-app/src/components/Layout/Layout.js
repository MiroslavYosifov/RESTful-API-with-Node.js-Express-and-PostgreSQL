import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideBar from '../Navigation/Sidebar/Sidebar';


const layout = (props) => {
    console.log(props);
    return (
        <Auxiliary>
            <div className={classes.Layout}>
                <Toolbar isLogged={props.isLogged}/> 
                <main  className={classes.Content}>
                    {props.children}
                </main>
                <SideBar isLogged={props.isLogged}/>
            </div>
        </Auxiliary>)
}
  
export default layout;