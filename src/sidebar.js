import React from 'react';
import characters from './characterlist.json';

import { Menu, Avatar, Cascader } from 'antd';

const { SubMenu } = Menu;

console.log({characters});


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCharIcon: "/character_images/feth-byleth-female-portrait.jpg",
      selectedCharName: "byleth(F)"
    };
  }

  handleClick = e => {
    console.log('click ', e);
  };



  render() {
    return (
      <div className="Sidebar">
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub2']}
        mode="inline"
      >
        <Menu.Item key="1">
          <Avatar shape="square" size="large" src={this.state.selectedCharIcon}> </Avatar>
          Support
        </Menu.Item>

        <Menu.Item key="2">Recruitment</Menu.Item>
        <Menu.Item key="3">Lost Items </Menu.Item>
        <Menu.Item key="4">Tea        </Menu.Item>
        <Menu.Item key="5">Gifts      </Menu.Item>
        <SubMenu
          key="sub2"
          title={ <span>Saves</span> }
        >
          <Menu.Item key="6">All Saves  </Menu.Item>
          <Menu.Item key="7">Add New    </Menu.Item>
        </SubMenu>
        <Menu.Item key="8">Source Code</Menu.Item>
        <Menu.Item key="9">About      </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default Sidebar;
