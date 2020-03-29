import React from 'react';
import styled from 'styled-components';

import { Avatar } from 'antd';


const StyledHouseAvatar = styled(Avatar).attrs(props => ({
  id: "Sb_Avatar_Icon",
  shape: "square",
  //src : props.selectedHouseIcon,
}))`
    margin: 0 auto;
    height: 50%;
    width: 50%;
    display: block;
    padding-bottom: 10px;
    padding-top: 10px;
`;


class HouseAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <StyledHouseAvatar />
    );
  }
}

export default HouseAvatar;
