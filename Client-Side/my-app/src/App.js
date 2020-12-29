import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import WorkoutBuilder from './containers/WorkoutBuilder/WorkoutBuilder';
import RecipeBuilder from './containers/RecipeBuilder/RecipeBuilder';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import Auth from './containers/Auth/Auth';


function App() {
  return (
    <div className="App">
      {/* <WorkoutBuilder></WorkoutBuilder>
      <Layout>
        <RecipeBuilder></RecipeBuilder>
      </Layout> */}
      <Layout>
        <Switch>
          <Route path="/workout" component={WorkoutBuilder}></Route>
          <Route path="/recipe" component={RecipeBuilder}></Route>
          <Route path="/food" component={FoodBuilder}></Route>
          <Route path="/auth" component={Auth}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
