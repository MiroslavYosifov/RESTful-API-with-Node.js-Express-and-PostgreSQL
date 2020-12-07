import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Layout from './components/Layout/Layout';
import RecipeBuilder from './containers/RecipeBuilder/RecipeBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <RecipeBuilder></RecipeBuilder>
      </Layout>
    </div>
  );
}

export default App;
