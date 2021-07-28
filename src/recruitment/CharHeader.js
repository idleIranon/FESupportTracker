import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Row, Col, Typography } from 'antd';

import chars from '../json/characters.json';

const { Title } = Typography;

const StyledCharHeader = styled.div`
  &&& {
    height: auto;
    background-color: white;
    width: 100%;
    min-height: 10em;
    position: static;
    top: 0;
  }
`;

const characters = chars.characters;


/**Character header on main page CharHeader component **/
function CharHeader() {

  useEffect(() => {
    localStorage.getItem('selectedSupportChar')
    localStorage.getItem('selectedSupportCharIcon' )
  }, [])

  return(
    characters.map((character) => {
      if(character.name == localStorage.getItem('selectedSupportChar')){
        return (
          <StyledCharHeader>
            <Row>
              <Col span={24}>
                <Title level={4}>
                  Current Character
                </Title>
              </Col>
            </Row>
            <Row type="flex" align="middle">
              <Col span={24}>
                <img
                  alt="Test"
                  height="150vh"
                  src={character.icons[0].src}
                />
              </Col>
            </Row>
            <Row type="flex" align="middle">
              <Col span={24}>
                    {character.fullname}
              </Col>
            </Row>
          </StyledCharHeader>
        );
      }
    })
  );
}

export default CharHeader;
