import React from 'react';

import { Row, Col } from 'antd';


class CharHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChar: "byleth-female",
      charName: "byleth"
    };
  }


  render() {

    return (
      <div className="char_header">
        <Row type="flex" align="center">
          <Col span={24} style={{'padding-right': '16%'}}>
            <img
              alt="Test"
              height="100vh"
              src={`/character_images/feth-${this.state.selectedChar.toLowerCase()}-portrait.jpg`}
            />
          </Col>
        </Row>
        <Row type="flex" align="center">
          <Col span={24}  style={{'padding-right': '16%'}}>
            {this.state.charName}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CharHeader;
