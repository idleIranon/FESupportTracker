import React from 'react';
import styled from 'styled-components';

import { Row, Col, Typography } from 'antd';

const { Title } = Typography;



const StyledCharHeader = styled.div`
  &&& {
    height: auto;
    background-color: white;
    width: 100%;
    position: static;
    top: 0;
  }
`;

/**Character header on main page CharHeader component **/
class CharHeader extends React.Component {

  render() {
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
              src={`/character_images/feth-${this.props.char.toLowerCase()}-portrait.jpg`}
            />
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col span={24}>
            {this.props.charname}
          </Col>
        </Row>
        </StyledCharHeader>
    );
  }
}

export default CharHeader;
