import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Main from './dashboard/Main';

import './app.css';

const PlayerSelection = () => <div> player selection here</div>;

const PreviewTeam = () => <div> Preview Team here</div>;

const App = () => (
  <Router>
    <Paper elevation={1}>
      <Route exact path="/" component={Main} />
      <Route exact path="/player" component={PlayerSelection} />
      <Route exact path="/team" component={PreviewTeam} />
    </Paper>
  </Router>
);

export default App;
