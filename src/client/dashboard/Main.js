import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Main() {
  return (
    <div>
      <Typography variant="headline" component="h3">
        Welcome to Yahoo! Fantasy Cricket
      </Typography>
      <Typography component="p">Choose your match</Typography>
    </div>
  );
}

export default withStyles(styles)(Main);
