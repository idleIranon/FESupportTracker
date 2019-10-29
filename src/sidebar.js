import React from 'react';

import { Menu, Avatar, Button } from 'antd';

import { Link } from 'react-router-dom';

const ButtonGroup = Button.Group;


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedHouseIcon: "./house_images/gdlogo.png",
    };
  }

  handleClick = e => {
    console.log('click ', e);
  };

  changeHouses = houseLogo => e => {
    this.setState({ selectedHouseIcon: `./house_images/${houseLogo}logo.png`});
  }


  render() {
    return (
      <div className="Sidebar">
        <div className="Sb_Top">
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={['/']}
          mode="inline">
            <Menu.Item id="Sb_Avatar_Row">
              <Avatar
              id="Sb_Avatar_Icon"
              shape="square"
              src={this.state.selectedHouseIcon}> </Avatar>
            </Menu.Item>

          <Menu.Item key="/">
            <Link to="/">
              Support
            </Link>
          </Menu.Item>

          <Menu.Item key="/recruitment">
            <Link to="/recruitment">
              Recruitment
            </Link>
          </Menu.Item>

          <Menu.Item key="/lostitems">
            <Link to="/lostitems">
              Lost Items
            </Link>
          </Menu.Item>

          <Menu.Item key="/tea">
            <Link to="/tea">
              Tea
            </Link>
          </Menu.Item>

          <Menu.Item key="/gifts">
            <Link to="/gifts">
              Gifts
            </Link>
          </Menu.Item>

          <Menu.Item key="/git">
            <a
              href="https://github.com/idleIranon/FESupportTracker"
              target="_blank"
              rel="noopener noreferrer">
              Source Code
            </a>
          </Menu.Item>

          <Menu.Item key="/about">
            <Link to="/about">
              About
            </Link>
          </Menu.Item>
        </Menu>
        </div>

        <Menu  mode="vertical">
          <Menu.Item key="/house">
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
