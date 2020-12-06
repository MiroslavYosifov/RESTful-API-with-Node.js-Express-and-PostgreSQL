import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import Home from '../components/Home/Home';
import About from '../components/About/About';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return(
      <BrowserRouter>
        <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about" render={(props) => (<About />)}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
