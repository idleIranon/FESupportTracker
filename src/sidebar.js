import React from 'react';
import HouseAvatar from './HouseAvatar.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, Button, Layout } from 'antd';


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


const StyledTopMenu = styled(Menu).attrs(props => ({



}))`
  height: 90%;
`;


const StyledSidebarHouseAvatarBox = styled(Menu.Item)`
  &&& {
    height: auto;
  }
`;

const StyledBottomMenu = styled(Menu)`

`;


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
      <StyledSidebarContainer>
          <StyledTopMenu
            onClick={this.handleClick}
            defaultSelectedKeys={['/']}
            mode="inline">
              <StyledSidebarHouseAvatarBox id="Sb_Avatar_Row">
                <HouseAvatar src={this.state.selectedHouseIcon} />
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
          </StyledTopMenu>

          <Menu  mode="vertical">
            <Menu.Item key="/house">
              <ButtonGroup id="Sb_House_Buttons">
                <Button className="white" style={{background: '#b02939'}} onClick={this.changeHouses("be")}>BE</Button>
                <Button className="white" style={{background: '#434c97'}} onClick={this.changeHouses("bl")}>BL</Button>
                <Button className="white" style={{background: '#c9a941'}} onClick={this.changeHouses("gd")}>GD</Button>
              </ButtonGroup>
            </Menu.Item>
          </Menu>
      </StyledSidebarContainer>
    );
  }
}

export default Sidebar;
