import React from 'react';
import styled from 'styled-components';
import { Menu, Layout } from 'antd';

import chars from '../json/characters.json';

const {Sider}  = Layout;

const characters = chars.characters

const StyledSidebarContainer = styled(Sider).attrs(props => ({
  breakpoint:"sm",
  width: "7vw"
  }))`

  &&& {
    overflow: auto;
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
      <StyledSidebarContainer key="CharSidebar">
            {renderMenuItems()}
      </StyledSidebarContainer>
    );
}

export default CharSidebar;
