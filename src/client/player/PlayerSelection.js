import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './playerSelection.css';

const playerList = [
  {
    PLAYER_NAME: 'LUKE RONCHI',
    PLAYER_TYPE: 'WK',
    PLAYER_CREDITS: 9.5
  },
  {
    PLAYER_NAME: 'DENESH RAMDIN',
    PLAYER_TYPE: 'WK',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'SHIMRON HETMYER',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 10.5
  },
  {
    PLAYER_NAME: 'COLIN MUNRO',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 10.5
  },
  {
    PLAYER_NAME: 'DARREN-BRAVO',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 9.5
  },
  {
    PLAYER_NAME: 'BRENDON MCCULLUM',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 9.5
  },
  {
    PLAYER_NAME: 'CHADWICK WALTON',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 9
  },
  {
    PLAYER_NAME: 'SHERFANE RUTHERFORD',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'CAMERON DELPORT',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'JASON MOHAMMED',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'COLIN INGRAM',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'GAJANAND SINGH',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'HAMZA TARIQ',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'AMIR JANGO',
    PLAYER_TYPE: 'BAT',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'DWAYNE BRAVO',
    PLAYER_TYPE: 'AR',
    PLAYER_CREDITS: 9.5
  },
  {
    PLAYER_NAME: 'SOHAIL TANVIR',
    PLAYER_TYPE: 'AR',
    PLAYER_CREDITS: 9
  },
  {
    PLAYER_NAME: 'SUNIL NARINE',
    PLAYER_TYPE: 'AR',
    PLAYER_CREDITS: 9
  },
  {
    PLAYER_NAME: 'CHRIS GREEN',
    PLAYER_TYPE: 'AR',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'JAVON SEARLES',
    PLAYER_TYPE: 'AR',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'ROSHON PRIMUS',
    PLAYER_TYPE: 'AR',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'IMRAN TAHIR',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 9.5
  },
  {
    PLAYER_NAME: 'FAWAD AHMED',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 9
  },
  {
    PLAYER_NAME: 'RAYAD EMRIT',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'SHANNON GABRIEL',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'ALI KHAN',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'KEEMO PAUL',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8.5
  },
  {
    PLAYER_NAME: 'ANDERSON PHILLIP',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'KHARY PIERRE',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'AKSHAYA PERSUAD',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'NIKITA MILLER',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'KEVON COOPER',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'DEVENDRA BISHOO',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'VEERASAMMY PERMAUL',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'ROMARIO SHEPHERD',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'SAURABH NETRAVALKAR',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 8
  },
  {
    PLAYER_NAME: 'TERRANCE HINDS',
    PLAYER_TYPE: 'BOW',
    PLAYER_CREDITS: 7.5
  }
];
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
    let { maxAvailablePoints, selectedPlayers } = this.state;
    const remainingPoints = selectedPlayers.reduce(
      (sum, currentPlayer) => sum + currentPlayer.PLAYER_CREDITS,
      0
    );
    return (
      <div>
        <h1>select the player for the match {matchId}</h1>
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
