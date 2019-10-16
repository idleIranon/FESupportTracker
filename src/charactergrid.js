import React from 'react';
import CharCard from './charactercard.js';
import CharHeader from './characterheader.js';
import chars from './characters.json';

import { Row, Col } from 'antd';




class CharGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChar: "byleth-female",
      charName: "byleth"
    };
  }

  findSupports(selectedChar) {
    for (var i = 0; i < chars.characters.length; i++) {
      if (chars.characters[i].name === "byleth-male"){
        return chars.characters[i];
      }
    }
  }

  renderCard(character) {
    return (
      <Col span={4}>
        <CharCard character={character} charName={character.name}>
        </CharCard>
      </Col>
    );
  }

  renderRows(numSupports, char) {
    //Fundtion to calc how many rows will be needed
    var cardsPerRow = 6;
    let numRows = Math.ceil(numSupports/cardsPerRow);
    //First character to be sought out
    var charIndex = 0;
    let rows = [];
    for (var i = 0; i < numRows; i++) {
      //Generate the cards and add them to an array
      let cards = [];
      for (var j = 0; j < cardsPerRow; j++) {
        if(typeof char.support[charIndex] === 'undefined') {}
        else {
          cards.push(this.renderCard(char.support[charIndex]));
        }
        charIndex++;
      }
      //Add the cards array between the rows
      rows.push(<Row type="flex" gutter={16} className="Row">{cards}</Row>)
    }

    return (
      <div>
        {rows}
      </div>
    );
  }

  render() {
    var charinjson;

    return (
      <div className="grid">
        <div className="char_header">
          <CharHeader  char={this.state.selectedChar} charname={this.state.charName} />
        </div>
        <div className="support_rows">
          {this.renderRows(this.findSupports(this.selectedChar).support.length, this.findSupports(this.selectedChar))}
        </div>
      </div>
    );
  }
}

export default CharGrid;
