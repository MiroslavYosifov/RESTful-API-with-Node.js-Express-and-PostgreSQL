import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import classes from './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import WorkoutBuilder from './containers/WorkoutBuilder/WorkoutBuilder';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import AuthBuilder from './containers/AuthBuilder/AuthBuilder';
import UserProfileBuilder from './containers/UserProfileBuilder/UserProfileBuilder';

function App(props) {

  //const isLogged = localStorage.getItem('isLogged');
  const [authData, setIsLogged] = useState({ isLogged: false, isAdmin: false });
  
  useEffect(() => {

    const updatedAuthData = {  
      isLogged: !!localStorage.getItem('token'),
      isAdmin: !!localStorage.getItem('isAdmin'),
    };

    if(authData.isLogged !== updatedAuthData.isLogged || authData.isAdmin !== updatedAuthData.isAdmin) {
      setIsLogged({
        ...authData,
        ...updatedAuthData
      });
    };
  });
  
  let routes = (
    <Switch>
      <Route path="/workout" component={WorkoutBuilder}></Route>
      <Route path="/food"  render={() => <FoodBuilder isLogged={authData.isLogged} isAdmin={authData.isAdmin}/>}></Route>
      <Route path="/auth" component={AuthBuilder}></Route>
      <Route render={() => <h1>Not found</h1>} ></Route>
    </Switch> 
  )

  if(authData.isLogged) {
    routes = (
      <Switch>myprofile
        <Route path="/workout" component={WorkoutBuilder}></Route>
        <Route path="/food"  render={() => <FoodBuilder isLogged={authData.isLogged} isAdmin={authData.isAdmin}/>}></Route>
        <Route path="/myprofile"  render={() => <UserProfileBuilder isLogged={authData.isLogged} isAdmin={authData.isAdmin}/>}></Route>
        <Route render={() => <h1>Not found</h1>} ></Route>
      </Switch>
    );
  }

  return (
    <div className={classes.App}>
      <Layout isLogged={authData.isLogged} {...props}>
        {routes}
      </Layout>
      {/* <h4>IS LOGGED {authData.isLogged.toString()}</h4>
      <h4>IS ADMIN {authData.isAdmin.toString()}</h4> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
      auth: state.auth,
  };
};

export default withRouter(connect(mapStateToProps)(App));
