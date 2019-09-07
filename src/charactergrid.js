import React from 'react';
import CharCard from './charactercard.js';
import chars from './characters.json';

import { Row, Col } from 'antd';

class CharGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Row type="flex" gutter={16} className="Row">
        <Col span={4}><CharCard></CharCard></Col>
        <Col span={4}><CharCard></CharCard></Col>
        <Col span={4}><CharCard></CharCard></Col>
        <Col span={4}><CharCard></CharCard></Col>
        <Col span={4}><CharCard></CharCard></Col>
        <Col span={4}><CharCard></CharCard></Col>
      </Row>
    );
  }
}

export default CharGrid;
