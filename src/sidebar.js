import React from 'react';
import characters from './characterlist.json';

import { Menu, Avatar } from 'antd';

import { Link } from 'react-router-dom';

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
        <Menu.ItemGroup>
          <Menu.Item style={{align:'center', alignItems: 'right', width: 200, 'line-height': '800'}}>
            <Avatar shape="square" size="large" src={this.state.selectedCharIcon} style={{padding: '50' }}> </Avatar>
          </Menu.Item>
        </Menu.ItemGroup>
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

        <SubMenu
          key="sub2"
          title={ <span>Saves</span> }
        >
          <Menu.Item key="6">All Saves  </Menu.Item>
          <Menu.Item key="7">Add New    </Menu.Item>
        </SubMenu>

        <Menu.Item key="8">
          <a
          href="https://github.com/idleIranon/FESupportTracker"
          target="_blank"
          rel="noopener noreferrer">
            Source Code
          </a>
        </Menu.Item>

        <Menu.Item key="9">
          <Link to="/about">
            About
          </Link>
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default Sidebar;
