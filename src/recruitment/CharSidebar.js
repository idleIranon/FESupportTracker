import React from 'react';
import styled from 'styled-components';
import { Menu, Layout, Row } from 'antd';

import chars from '../json/characters.json';

const {Sider}  = Layout;

const characters = chars.characters

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


function renderMenuItems() {
    const menuItems = characters.map((character) => (
        <Menu.Item key={character.name}>{character.fullname}</Menu.Item>
    ))
    console.log(menuItems)
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
