import React from 'react';

import { Row, Col } from 'antd';


class CharHeader extends React.Component {

  render() {
    return (
      <div className="char_header">
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
      </div>
    );
  }
}

export default CharHeader;
