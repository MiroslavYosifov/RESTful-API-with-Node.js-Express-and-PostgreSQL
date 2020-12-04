import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return(
    <div>
      <h1>APP COMPONENT</h1>
      <Home/>
    </div>
    )
  }
}

export default App;
