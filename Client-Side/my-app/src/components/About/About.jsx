import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import Topic from '../Topic/Topic'

function About() {

  let { path, url } = useRouteMatch();
  console.log(useParams());

  return (
    <div>
      <h2>About Page</h2>
      <ul>
        <li>
          <Link to={`${url}/topic`}>Rendering with React</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export default About;