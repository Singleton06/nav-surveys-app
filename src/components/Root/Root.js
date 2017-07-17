import React from 'react';
import blue from 'material-ui/colors/blue';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import NavigationBar from '../NavigationBar';
import MainContent from '../MainContent';

import './style.scss';


const theme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    type: 'dark',
  }),
});

export default class Root extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="root">
          <div className="navigation-container">
            <NavigationBar />
          </div>
          <div className="content-container">
            <div className="gutter-left" />
            <div className="page-content">
              <MainContent />
            </div>
            <div className="gutter-right" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
