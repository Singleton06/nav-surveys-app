import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography type="title" color="inherit">
          Navigator Survey App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styleSheet)(NavigationBar);
