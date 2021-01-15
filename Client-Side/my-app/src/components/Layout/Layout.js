import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'


const layout = (props) => {
    console.log(props);
    return (<Auxiliary>
        <Toolbar key={props.isLogged} isLogged={props.isLogged}/>
        <main  className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>)
}
  
export default layout;