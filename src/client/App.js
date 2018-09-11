import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Main from './dashboard/Main';
import PlayerSelection from './player/PlayerSelection';
import Team from './team/Team';

import './app.css';

// const PlayerSelection = () => <div> player selection here</div>;

const App = () => (
  <Router>
    <Paper elevation={1}>
      <Route exact path="/" component={Main} />
      <Route path="/player/:matchID" component={PlayerSelection} />
      <Route path="/team/:teamID" component={Team} />
    </Paper>
  </Router>
);

export default App;
