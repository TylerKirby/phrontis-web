import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import _ from 'underscore'

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
        <div className="App-header">
          <h2>Phrontis</h2>
        </div>
        <div className="">
          <DropDownMenu>
            {
              _.range(1, 20).map(unit => {
                <MenuItem
                  value={unit}
                  primaryText={`Unit ${unit}`}
                />
              })
            }
          </DropDownMenu>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
