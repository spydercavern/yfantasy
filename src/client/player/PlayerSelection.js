import React, { Component } from 'react';

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
  renderPlayerList() {
    return playerList.map(player => (
      <li className="mdc-list-item" key={player.PLAYER_NAME}>
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text">
            {player.PLAYER_NAME} - {player.PLAYER_TYPE} -{' '}
            {player.PLAYER_CREDITS}
          </span>
        </span>
      </li>
    ));
  }
  render() {
    let matchId = this.props.match.params.matchID;
    return (
      <div>
        select the player for the match {matchId}
        <ul className="mdc-list mdc-list--two-line" aria-orientation="vertical">
          {this.renderPlayerList()}
        </ul>
      </div>
    );
  }
}
