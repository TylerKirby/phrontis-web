import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import _ from 'underscore'

class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({
      selectedValue: value
    })
  }

  render() {
    const { selectedValue } = this.state;
    const { menuItems, title } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <DropDownMenu
            value={selectedValue}
            onChange={this.handleChange}
          >
            {
              menuItems.map(menuItem => {
                <MenuItem
                  primaryText={menuItem.primaryText}
                  value={menuItem.value}
                />
              })
            }
          </DropDownMenu>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default DropDown;
