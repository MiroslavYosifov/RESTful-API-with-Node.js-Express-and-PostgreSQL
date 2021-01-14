import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import WorkoutBuilder from './containers/WorkoutBuilder/WorkoutBuilder';
import RecipeBuilder from './containers/RecipeBuilder/RecipeBuilder';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import AuthBuilder from './containers/AuthBuilder/AuthBuilder';

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
      <Route path="/recipe" component={RecipeBuilder}></Route>
      <Route path="/food" component={FoodBuilder}></Route>
      <Route path="/auth" component={AuthBuilder}></Route>
    </Switch> 
  )

  if(authData.isLogged) {
    routes = (
      <Switch>
        <Route path="/workout" component={WorkoutBuilder}></Route>
        <Route path="/recipe" component={RecipeBuilder}></Route>
        <Route path="/food" component={FoodBuilder}></Route>
      </Switch>
    );
  } 
  return (
    <div className="App">
      
      {/* <WorkoutBuilder></WorkoutBuilder>
      <Layout>
        <RecipeBuilder></RecipeBuilder>
      </Layout> */}
      <Layout isLogged={authData.isLogged} {...props}>
        {routes}
      </Layout>
      <h1>IS LOGGED {authData.isLogged.toString()}</h1>
      <h1>IS ADMIN {authData.isAdmin.toString()}</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      auth: state.auth,
  };
};

export default withRouter(connect(mapStateToProps)(App));
