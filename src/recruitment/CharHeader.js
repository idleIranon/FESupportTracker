import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Row, Col, Typography } from 'antd';


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


/**Character header on main page CharHeader component **/
function CharHeader() {

  useEffect(() => {
    localStorage.getItem('selectedSupportChar')
    localStorage.getItem('selectedSupportCharIcon' )
  }, [])

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
            height="100vh"
            src={localStorage.getItem('selectedSupportCharIcon')}
          />
        </Col>
      </Row>
      <Row type="flex" align="middle">
        <Col span={24}>
          {(localStorage.getItem('selectedSupportChar')).charAt(0).toUpperCase() + (localStorage.getItem('selectedSupportChar')).slice(1)}
        </Col>
      </Row>
      </StyledCharHeader>
  );
}

export default CharHeader;
