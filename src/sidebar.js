import React from 'react';

import { Menu, Avatar, Button } from 'antd';

import { Link } from 'react-router-dom';

const ButtonGroup = Button.Group;


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedHouseIcon: "./gdlogo.png",
    };
  }

  handleClick = e => {
    console.log('click ', e);
  };

  changeHouses = houseLogo => e => {
    this.setState({ selectedHouseIcon: `./${houseLogo}logo.png`});
  }


  render() {
    return (
      <div className="Sidebar">
        <div className="Sb_Top">
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          mode="inline">
            <Menu.Item id="Sb_Avatar_Row">
              <Avatar
              id="Sb_Avatar_Icon"
              shape="square"
              src={this.state.selectedHouseIcon}> </Avatar>
            </Menu.Item>

          <Menu.Item key="1">
            <Link to="/">
              Support
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/recruitment">
              Recruitment
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/lostitems">
              Lost Items
            </Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Link to="/tea">
              Tea
            </Link>
          </Menu.Item>

          <Menu.Item key="5">
            <Link to="/gifts">
              Gifts
            </Link>
          </Menu.Item>

          <Menu.Item key="6">
            <a
              href="https://github.com/idleIranon/FESupportTracker"
              target="_blank"
              rel="noopener noreferrer">
              Source Code
            </a>
          </Menu.Item>

          <Menu.Item key="7">
            <Link to="/about">
              About
            </Link>
          </Menu.Item>
        </Menu>
        </div>

        <Menu  mode="vertical">
          <Menu.Item key="8">
            <ButtonGroup id="Sb_House_Buttons">
              <Button className="white" style={{background: '#b02939'}} onClick={this.changeHouses("be")}>BE</Button>
              <Button className="white" style={{background: '#434c97'}} onClick={this.changeHouses("bl")}>BL</Button>
              <Button className="white" style={{background: '#c9a941'}} onClick={this.changeHouses("gd")}>GD</Button>
            </ButtonGroup>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
