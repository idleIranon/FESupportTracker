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
    key: "Styled_Top_Menu",
    mode: "inline",
  }))`

  height: 90%;
`;

const StyledSidebarHouseAvatarBox = styled(Menu.Item).attrs(props =>
  ({
    key: "Sb_Avatar_Row"
  }
  ))`
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
  const [selectedHouse, setSelectedHouse] = useState(
    (localStorage.getItem('selectedHouse') ?? 'gd')
  );

  useEffect(() => {
    localStorage.setItem('selectedHouse', selectedHouse)
    localStorage.setItem('selectedHouseIcon', './house_images/' + selectedHouse + 'logo.png' )
  }, [selectedHouse])

  // const [collapsed, setCollapsed] = useState('false');

  // function onCollapse(collapsed) {
  //   this.setState({ collapsed });
  // };

    return ( 
      <StyledSidebarContainer key="RouteSidebar">
          <StyledTopMenu key="SidebarAvatarIcon"
            //onClick={() => (setCollapsed)}
            >
              <StyledSidebarHouseAvatarBox id="Sb_Avatar_Row" >
                {HouseAvatar()}
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

          <Menu mode="vertical" key="SidebarHouseButtonGroup">
            <Menu.Item key="/house">
              <StyledHouseButtonGroup>
                <Button style={{color: '#fff', background: '#b02939'}} onClick={() => setSelectedHouse("be")}>BE</Button>
                <Button style={{color: '#fff', background: '#434c97'}} onClick={() => setSelectedHouse("bl")}>BL</Button>
                <Button style={{color: '#fff', background: '#c9a941'}} onClick={() => setSelectedHouse("gd")}>GD</Button>
              </StyledHouseButtonGroup>
            </Menu.Item>
          </Menu>
      </StyledSidebarContainer>
    );
  
}

export default Sidebar;
