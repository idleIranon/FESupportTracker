import React from 'react';
import styled from 'styled-components';
import { Menu, Layout, Row } from 'antd';

const {Sider}  = Layout;

const StyledSidebarContainer = styled(Sider).attrs(props => ({
  breakpoint:"sm",
  collapsedWidth:"0",
  collapsible:"false",
  theme:"light",
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
      defaultSelectedKeys: "{['Char1']}",
      mode: "inline",
    }))`
  
    height: 90%;
  `;


function CharSidebar() {

    return ( 
      <StyledSidebarContainer>
        <StyledTopMenu>
            <Menu.Item key="Char1">
                Char1
            </Menu.Item>

            <Menu.Item key="Char2">
                Char2
            </Menu.Item>

            <Menu.Item key="Char3">
                Char3
            </Menu.Item>

            <Menu.Item key="Char4">
                Char4
            </Menu.Item>

            <Menu.Item key="Char5">
                Char5
            </Menu.Item>
        </StyledTopMenu>
      </StyledSidebarContainer>
    );
  
}

export default CharSidebar;
