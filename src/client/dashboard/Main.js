import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { matchList } from '../common/common';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

/*eslint-disable*/

class Main extends Component {
  handleClick = MATCH_ID => {
    console.log(`redirecting to ${MATCH_ID}`);
    this.props.history.push(`/player/${MATCH_ID}`);
  };

  renderMatchlist = () =>
    matchList.map(match => (
      <li
        className="mdc-list-item"
        key={match.MATCH_ID}
        onClick={() => this.handleClick(match.MATCH_ID)}
      >
        <span className="mdc-list-item__text">
          <span className="mdc-list-item__primary-text">
            {match.MATCH_ID} - {match.MATCH_NAME}
          </span>
        </span>
      </li>
    ));
  render() {
    return (
      <div>
        <h3>Available Matches</h3>
        <ul className="mdc-list mdc-list--two-line" aria-orientation="vertical">
          {this.renderMatchlist()}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
