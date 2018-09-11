import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const matchList = [
  {
    MATCH_ID: 1,
    MATCH_NAME: 'CSK vs RCB'
  },
  {
    MATCH_ID: 2,
    MATCH_NAME: 'KKR vs MI'
  },
  {
    MATCH_ID: 3,
    MATCH_NAME: 'SRH vs DD'
  }
];

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
          <span className="mdc-list-item__primary-text">{match.MATCH_ID}</span>
          <span className="mdc-list-item__secondary-text">
            {match.MATCH_NAME}
          </span>
        </span>
      </li>
    ));
  render() {
    return (
      <div>
        <Typography variant="headline" component="h3">
          Welcome to Yahoo! Fantasy Cricket
        </Typography>
        <Typography component="p">Choose your match</Typography>

        <ul className="mdc-list mdc-list--two-line" aria-orientation="vertical">
          {this.renderMatchlist()}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
