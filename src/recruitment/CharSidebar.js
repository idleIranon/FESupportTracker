import React from 'react';
import styled from 'styled-components';
import { Menu, Layout, Row } from 'antd';

import chars from '../json/characters.json';

const {Sider}  = Layout;

const characters = chars.characters

const StyledSidebarContainer = styled(Sider).attrs(props => ({
  breakpoint:"sm",
  collapsedWidth:"0",
  height: "100vh"
  }))`

  &&& {
    overflow: auto;
    height: 100vh;
    width: 200px;
    collapsible:"false";
    text-align: justify;
    background: #FFF;
  }
`;

const StyledTopMenu = styled(Menu).attrs(props =>
    ({
      defaultSelectedKeys: "{['Char1']}",
      mode: "inline",
    }))`
  
    height: 100vh;
  `;


function renderMenuItems() {
    const menuItems = characters.map((character) => (
        <Menu.Item key={character.name}>{character.fullname}</Menu.Item>
    ))
    return ( <StyledTopMenu>{menuItems} </StyledTopMenu>)
}


function CharSidebar() {
    return ( 
      <StyledSidebarContainer>
            {renderMenuItems()}
      </StyledSidebarContainer>
    );
}

export default CharSidebar;
