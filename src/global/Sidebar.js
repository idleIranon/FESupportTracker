import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, Button, Layout } from 'antd';

import HouseAvatar from './HouseAvatar.js';


const ButtonGroup = Button.Group;
const {Sider}  = Layout;

const StyledSidebarContainer = styled(Sider).attrs(props => ({
  breakpoint:"sm",
  collapsedWidth:"0",
  collapsible:"true",
  theme:"light",
  //collapsed={this.state.collapsed},
  //onCollapse={this.onCollapse}
  }))`

  &&& {
    height: 100vh;
    width: 200px;
    text-align: justify;
    background: #FFF;
  }
`;

const StyledTopMenu = styled(Menu).attrs(props =>
  ({
    defaultSelectedKeys: "{['/']}",
    mode: "inline",
  }))`

  height: 90%;
`;

const StyledSidebarHouseAvatarBox = styled(Menu.Item)`
  &&& {
    height: auto;
  }
`;

const StyledHouseButtonGroup = styled(ButtonGroup)`
  width: 100%;
  padding-right: 6%;
  padding-left: 5%;
`;


function Sidebar() {
  const [selectedHouse, setSelectedHouse] = useState('./house_images/gdlogo.png');
  const [collapsed, setCollapsed] = useState('false');

  function changeHouses(houseLogo) {
    setSelectedHouse(`./house_images/${houseLogo}logo.svg`)
    localStorage.setItem('SelectedHouse', {selectedHouse})
  }

  useEffect(() => {
    changeHouses()
  })

  function onCollapse(collapsed) {
    console.log(collapsed);
    this.setState({ collapsed });
  };

    return ( 
      <StyledSidebarContainer>
          <StyledTopMenu
            onClick={() => (setCollapsed)}>
              <StyledSidebarHouseAvatarBox id="Sb_Avatar_Row">
                <HouseAvatar src={localStorage.getItem('SelectedHouse')} />
              </StyledSidebarHouseAvatarBox>

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

            <Menu.Item key="/favitems">
              <Link to="/favitems">
                Liked Items
              </Link>
            </Menu.Item>

            <Menu.Item key="/about">
              <Link to="/about">
                About
              </Link>
            </Menu.Item>
          </StyledTopMenu>

          <Menu  mode="vertical">
            <Menu.Item key="/house">
              <StyledHouseButtonGroup>
                <Button className="white" style={{background: '#b02939'}} onClick={() => changeHouses("be")}>BE</Button>
                <Button className="white" style={{background: '#434c97'}} onClick={() => changeHouses("bl")}>BL</Button>
                <Button className="white" style={{background: '#c9a941'}} onClick={() => changeHouses("gd")}>GD</Button>
              </StyledHouseButtonGroup>
            </Menu.Item>
          </Menu>
      </StyledSidebarContainer>
    );
  
}

export default Sidebar;
