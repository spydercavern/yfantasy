import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import _ from 'lodash';
import './team.css';

import { teamName, matchSimulatedResults, teamResults } from '../common/common';

export default class Team extends Component {
  constructor() {
    super();
    this.state = {
      simulating: false,
      matchResults: []
    };
  }

  simulateResult() {
    console.log(`simulate results`);
    //
    this.setState({
      simulating: true,
      matchResults: []
    });

    setTimeout(() => {
      this.setState({
        simulating: false,
        matchResults: matchSimulatedResults
      });
    }, 1);
  }

  getPlayerScore(playerName) {
    let completeResult = this.state.matchResults;
    return completeResult.filter(
      player => player.PLAYER_NAME === playerName
    )[0];
  }

  renderSimulatedResult(selectedPlayers) {
    let completeResult = this.state.matchResults;
    let relevantTeamMemberResult = [];

    selectedPlayers.forEach(player => {
      relevantTeamMemberResult.push(this.getPlayerScore(player.PLAYER_NAME));
    });

    let totalPoints = relevantTeamMemberResult.reduce(
      (sum, currentPlayer) => sum + currentPlayer.POINTS_SCORED,
      0
    );
    // get all the participating team
    let teamRankings = JSON.parse(JSON.stringify(teamResults));
    teamRankings.push({
      TEAM_NAME: teamName,
      POINTS_EARNED: totalPoints,
      highlight: true
    });

    // sort the teamRankings and display
    let sortedTeam = _.sortBy(teamRankings, ['POINTS_EARNED']).reverse();

    return (
      <div className="result-section">
        <div className="my-team-results">
          <h2>My players score</h2>

          {relevantTeamMemberResult.map(player => (
            <div key={player.PLAYER_NAME}>
              {player.PLAYER_NAME} - {player.POINTS_SCORED}
            </div>
          ))}

          <h3> Total Points: {totalPoints}</h3>
        </div>
        <div className="overall-team-results">
          <h2>Overall Rankings </h2>
          <div>
            {sortedTeam.map(team => (
              <div key={team.TEAM_NAME}>
                <div className={team.highlight ? 'highlight-my-team' : ''}>
                  {team.TEAM_NAME} - {team.POINTS_EARNED}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    let matchKey = this.props.match.params.teamID;
    let { matchResults, simulating } = this.state;
    let selectedPlayers = JSON.parse(localStorage.getItem(matchKey));
    return (
      <div>
        <h1> {teamName}</h1>
        {/* <h2>Selected Players</h2>
        {selectedPlayers.map(player => (
          <div key={player.PLAYER_NAME}> {player.PLAYER_NAME} </div>
        ))} */}
        <Button
          variant="contained"
          color="primary"
          onClick={this.simulateResult.bind(this)}
        >
          Simulate Result
        </Button>

        {simulating ? (
          <div style={{ padding: 30 }}>
            <LinearProgress />
          </div>
        ) : null}

        {!simulating &&
          matchResults.length > 0 &&
          this.renderSimulatedResult(selectedPlayers)}
      </div>
    );
  }
}
