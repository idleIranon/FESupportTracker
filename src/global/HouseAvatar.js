import React, { useEffect, useState }  from 'react';
import styled from 'styled-components';

import { Avatar } from 'antd';


const StyledHouseAvatar = styled(Avatar).attrs(props =>
  ({
    id: "Sb_Avatar_Icon",
    shape: "square",
  }))`

  &&& {
    margin: 0 auto;
    height: 50%;
    width: 50%;
    display: block;
    padding-bottom: 10px;
    padding-top: 10px;
  }
`;

function HouseAvatar () {
  const [houseIcon, setHouseIcon] = useState(localStorage.getItem('selectedHouseIcon'))

  useEffect(() => {

  }, [])

    return (
        <StyledHouseAvatar src={localStorage.getItem('selectedHouseIcon')} />
    );
}

export default HouseAvatar;
