import React from 'react';

import { Menu, Avatar, Button, Layout } from 'antd';

import { Link } from 'react-router-dom';

const ButtonGroup = Button.Group;
const {Sider}  = Layout;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHouseIcon: "./house_images/gdlogo.png",
      collapsed: false,
    };
  }

  handleClick = e => {
    console.log('click ', e);
  };

  changeHouses = houseLogo => e => {
    this.setState({ selectedHouseIcon: `./house_images/${houseLogo}logo.png`});
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() {
    return (
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
        collapsible="true"
        theme="light"
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}>
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
      </Sider>
    );
  }
}

export default Sidebar;
