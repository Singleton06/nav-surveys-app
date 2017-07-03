import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AppBar from 'material-ui/AppBar'

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

const logWhenClicked = () => {
  console.log('clicked!');
};

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <AppBar>
      </AppBar>
      <Tabs>
        <Tab label="Dashboard">
          <div id="nav-surveys-application">
            Welcome to the nav surveys application!
            <FloatingActionButton style={style} mini={true}>
              <ContentAdd onTouchTap={logWhenClicked} />
            </FloatingActionButton>
          </div>
        </Tab>
        <Tab label="Metrics">
          <div>Do all the metrics here!</div>
        </Tab>
      </Tabs>
    </div>
  </MuiThemeProvider>
);

export default App;
