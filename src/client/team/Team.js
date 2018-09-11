import React, { Component } from 'react';

export default class Team extends Component {
  render() {
    let matchKey = this.props.match.params.teamID;
    let selectedPlayers = JSON.parse(localStorage.getItem(matchKey));
    return (
      <div>
        Selected Players
        {selectedPlayers.map(player => (
          <div> {player.PLAYER_NAME} </div>
        ))}
      </div>
    );
  }
}
