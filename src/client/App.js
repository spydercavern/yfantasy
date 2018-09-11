import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Main from './dashboard/Main';

import './app.css';

const App = () => (
  <Router>
    <Paper elevation={1}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Main} />
      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
    </Paper>
  </Router>
);

export default App;
