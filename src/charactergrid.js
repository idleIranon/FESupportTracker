import React from 'react';
import CharCard from './charactercard.js';
import chars from './characters.json';

import { Row, Col } from 'antd';


for (var i = 0; i < chars.characters.length; i++){
  // look for the entry with a matching `code` value
  if (chars.characters[i].name === "byleth(F)"){

    var charinjson = chars.characters[i];
        console.log({charinjson});
     // we found it
    // obj[i].name is the matched result
  }
}

class CharGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedChar: "byleth(F)"
    };
  }

  renderCard() {
    return (
      <Col span={4}><CharCard></CharCard></Col>
    );
  }

  renderCards() {
    let rowcards = [];
    for(var cards = 0; cards < 6; cards++)
    {
      rowcards.push(this.renderCard());
    }
    return rowcards;
  }

  renderCardRow() {
    return (
      <Row type="flex" gutter={16} className="Row">
        {this.renderCards()}
      </Row>
    );
  }

  render() {
    return (
      <div className="grid">
        {this.renderCardRow()}
      </div>
    );
  }
}

export default CharGrid;
