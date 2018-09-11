import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Main from './dashboard/Main';
import PlayerSelection from './player/PlayerSelection';

import './app.css';

// const PlayerSelection = () => <div> player selection here</div>;

const PreviewTeam = props => {
  let id = props.match.params.id;
  return <div> Team Selectionhere {id} </div>;
};
const App = () => (
  <Router>
    <Paper elevation={1}>
      <Route exact path="/" component={Main} />
      <Route path="/player/:matchID" component={PlayerSelection} />
      <Route path="/team/:id" component={PreviewTeam} />
    </Paper>
  </Router>
);

export default App;
