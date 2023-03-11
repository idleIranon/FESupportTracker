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
      if(character.name === localStorage.getItem('selectedSupportChar')){
        return (
          <StyledCharHeader key="StyledCharHeader">
            <Row key="currCharHeaderRow">
              <Col span={24} key="currCharHeaderCol">
                <Title level={4} key="currCharHeaderTitle">
                  Current Character
                </Title>
              </Col>
            </Row>
            <Row type="flex" align="middle" key="currCharImgRow">
              <Col span={24} key="currCharImgCol">
                <img
                  alt="Test"
                  height="150vh"
                  src={character.icons[0].src}
                />
              </Col>
            </Row>
            <Row type="flex" align="middle" key="currCharFullNameRow">
              <Col span={24} key="currCharFullNameCol">
                    {character.fullname}
              </Col>
            </Row>
          </StyledCharHeader>
        );
      }
      return null;
    })
  );
}

export default CharHeader;
