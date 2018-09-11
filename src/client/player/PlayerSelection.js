import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './playerSelection.css';
import { matchList, playerList } from '../common/common';

/*eslint-disable*/
export default class PlayerSelection extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      selectedPlayers: [],
      maxPlayers: 11,
      maxAvailablePoints: 100
    };
  }

  componentDidMount() {
    this.setState({
      players: playerList.map(player => {
        player.selected = false;
        return player;
      })
    });
  }

  canAddPlayer(newPlayer) {
    if (newPlayer.selected) {
      return true;
    }
    let { selectedPlayers, maxPlayers, maxAvailablePoints } = this.state;
    // max number of players already added
    if (selectedPlayers.length > maxPlayers) {
      alert(`max players selected ${maxPlayers}`);
      return false;
    }
    // check if the max points reached
    let totalPoints = selectedPlayers.reduce(
      (sum, currentPlayer) => sum + currentPlayer.PLAYER_CREDITS,
      0
    );
    if (totalPoints + newPlayer.PLAYER_CREDITS > maxAvailablePoints) {
      alert(`max points attained ${maxAvailablePoints}`);
      return false;
    }
    return true;
  }

  addRemovePlayer(currentPlayer) {
    console.log(`current Player ${currentPlayer.PLAYER_NAME}`);
    let { players } = this.state;

    let newPlayers = players.map(player => {
      if (
        currentPlayer.PLAYER_NAME === player.PLAYER_NAME &&
        this.canAddPlayer(currentPlayer)
      ) {
        let newPlayer = { ...player };
        newPlayer.selected = !newPlayer.selected;
        return newPlayer;
      }
      return player;
    });
    this.setState({
      players: newPlayers,
      selectedPlayers: newPlayers.filter(player => player.selected)
    });
  }

  renderPlayerList(players) {
    return players.map(player => {
      let css = `mdc-list-item ${
        player.selected ? 'selected' : 'not-selected'
      }`;

      return (
        <li
          className={css}
          key={player.PLAYER_NAME}
          onClick={() => this.addRemovePlayer(player)}
        >
          <span className="mdc-list-item__text">
            <span className="mdc-list-item__primary-text">
              {player.PLAYER_NAME} - {player.PLAYER_TYPE} -{' '}
              {player.PLAYER_CREDITS}
            </span>
          </span>
        </li>
      );
    });
  }
  canSubmitSelection() {
    return this.state.selectedPlayers.length === 11;
  }

  render() {
    let matchId = this.props.match.params.matchID;
    let currentMatch = matchList.filter(
      match => match.MATCH_ID.toString() === matchId
    );

    let matchName = currentMatch.length > 0 ? currentMatch[0].MATCH_NAME : '';
    let { maxAvailablePoints, selectedPlayers } = this.state;
    const remainingPoints = selectedPlayers.reduce(
      (sum, currentPlayer) => sum + currentPlayer.PLAYER_CREDITS,
      0
    );
    return (
      <div>
        <h1> Team Hacker Oath </h1>
        <h2>Choose your players for the match {matchName}</h2>
        <div>
          <div>
            Total Remaining points {maxAvailablePoints - remainingPoints}
          </div>
          <div>Total selected players {selectedPlayers.length}</div>
        </div>
        <Button
          variant="contained"
          color="primary"
          disabled={!this.canSubmitSelection()}
        >
          Submit Selection
        </Button>
        <div className="players-selection-container">
          <br />
          <div className="current-players-container">
            Avilable Players
            <ul
              className="mdc-list mdc-list--two-line player max-height-500"
              aria-orientation="vertical"
            >
              {this.renderPlayerList(this.state.players)}
            </ul>
          </div>
          <div className="selected-players-container">
            Selected Players
            <ul
              className="mdc-list mdc-list--two-line player max-height-500"
              aria-orientation="vertical"
            >
              {this.renderPlayerList(this.state.selectedPlayers)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
