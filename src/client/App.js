import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Main from './dashboard/Main';
import PlayerSelection from './player/PlayerSelection';
import Team from './team/Team';

import './app.css';

// const PlayerSelection = () => <div> player selection here</div>;

const App = () => (
  <Router>
    <div>
      <img
        class="banner"
        src="https://s.yimg.com/dh/ap/dfpromo/df_banner_wide_v2.png"
      />
      <div className="main-header">
        <span className="site-logo" />
        <Link to="/">Home</Link>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <Route exact path="/" component={Main} />
        <Route path="/player/:matchID" component={PlayerSelection} />
        <Route path="/team/:teamID" component={Team} />
      </div>
    </div>
  </Router>
);

export default App;
