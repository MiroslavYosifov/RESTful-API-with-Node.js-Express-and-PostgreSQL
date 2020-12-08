import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Layout from './components/Layout/Layout';
import RecipeBuilder from './containers/RecipeBuilder/RecipeBuilder';
import WorkoutBuilder from './containers/WorkoutBuilder/WorkoutBuilder';


function App() {
  return (
    <div className="App">
      <WorkoutBuilder></WorkoutBuilder>
      <Layout>
        <RecipeBuilder></RecipeBuilder>
      </Layout>
    </div>
  );
}

export default App;
