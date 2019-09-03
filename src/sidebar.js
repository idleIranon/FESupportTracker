import React from 'react';

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCharIcon: "Test",
      selectedCharName: "Test"
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
        <Menu.Item>
          <Icon>{this.props.selectedCharIcon} </Icon>
          {this.props.selectedCharName}
        </Menu.Item>

        <Menu.Item key="1">Recruitment</Menu.Item>
        <Menu.Item key="2">Lost Items</Menu.Item>
        <Menu.Item key="3">Tea</Menu.Item>
        <Menu.Item key="4">Gifts</Menu.Item>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="setting" />
              <span>Games</span>
            </span>
          }
        >
          <Menu.Item key="5">All Games</Menu.Item>
          <Menu.Item key="6">Add New</Menu.Item>
        </SubMenu>
        <Menu.Item key="7">Source Code</Menu.Item>
        <Menu.Item key="8">About</Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default Sidebar;
