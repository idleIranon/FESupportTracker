import React from 'react';
import CharCard from './charactercard.js';
import chars from './characters.json';

import { Row, Col } from 'antd';


for (var i = 0; i < chars.characters.length; i++){
  // look for the entry with a matching `code` value
  if (chars.characters[i].name === "byleth-male"){
    var charinjson = chars.characters[i];
    console.log({charinjson});
     // we found it
  }
}

class CharGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChar: "byleth(F)"
    };
  }

  renderCard(character) {
    return (
      <Col span={4}><CharCard character={character} charName={character.name}></CharCard></Col>
    );
  }

  renderRows(numSupports) {
    //Fundtion to calc how many rows will be needed
    var cardsPerRow = 6;
    let numRows = Math.ceil(numSupports/cardsPerRow);
    //First character to be sought out
    var charIndex = 0;
    let rows = [];
    for (var i = 0; i < numRows; i++) {
      //Generate the cards and add them to an array
      let cards = [];
      for (var j = 0; j < cardsPerRow; j++)
      {
        if(typeof charinjson.support[charIndex] === 'undefined') {}
        else
        {
          console.log(charinjson.support[charIndex]);
          cards.push(this.renderCard(charinjson.support[charIndex]));
        }
        charIndex++;
      }
      //Add the cards array between the rows
      rows.push
      (
        <Row type="flex" gutter={16} className="Row">
          {cards}
        </Row>
      )
    }

    return (
      <div>
        {rows}
      </div>
    );
  }

  render() {
    var supportRows = charinjson.support.length;
    console.log(supportRows);

    return (
      <div className="grid">
        {this.renderRows(supportRows)}
      </div>
    );
  }
}

export default CharGrid;
