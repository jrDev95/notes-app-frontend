import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Page Components

import TaskViewComponent from '../pages/task-view/task-view-component';

const RouterOutlet = () => {
  return (
    <Router>
      <Switch>
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
            <TaskViewComponent/>
          </Route>
      </Switch>
    </Router>
  )
}

export default RouterOutlet;
