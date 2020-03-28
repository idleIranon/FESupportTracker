import React from 'react';
import CharCard from './CharCard.js';
import CharHeader from './CharHeader.js';
import chars from './json/characters.json';

import { Row, Col } from 'antd';


class CharGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChar: "linhardt",
      charName: "linhardt",
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

//3 functions to handle watching screen size to adjust # num of cards per row
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

//3 Functions to find char json info, create rows, and create cards per row
  findSupports(selectedChar) {
    for (var i = 0; i < chars.characters.length; i++) {
      if (chars.characters[i].name === "linhardt"){
        return chars.characters[i];
      }
    }
  }

  renderCard(character, span, number) {
    var span_length;
    var span_temp = span;
    if (24 % span_temp === 0)
    {
      span_length = 24/span;
    } else {
      span_length = Math.floor(24/span);
    }
    return (
      <Col key={character+"col" + number} span={span_length}>
        <CharCard key={character+"_card" + number} character={character} charName={character.name}>
        </CharCard>
      </Col>
    );
  }

  renderRows(numSupports, char) {
    //Fundtion to calc how many rows will be needed
    var minCardWidth = 265;
    var sidebar_width = 200;
    var cardsPerRow;
    if(this.state.width > 340) {
      cardsPerRow = Math.round((this.state.width-sidebar_width)/minCardWidth);
    } else {
      cardsPerRow = 1;
    }
    let numRows = Math.ceil(numSupports/cardsPerRow);
    var charIndex = 0;
    let rows = [];
    for (var i = 0; i < numRows; i++) {
      //Generate the cards and add them to an array
      let cards = [];
      for (var j = 0; j < cardsPerRow; j++) {
        if(typeof char.support[charIndex] === 'undefined') {}
        else {
          cards.push(this.renderCard(char.support[charIndex], cardsPerRow, charIndex));
        }
        charIndex++;
      }
      //Add the cards array between the rows
      rows.push(<Row key={charIndex} type="flex" justify="left" gutter={16} className="Row">{cards}</Row>)

    }
    return ( <div> {rows} </div> );
  }

  render() {
    return (
      <div className="grid">
        <div className="char_header">
          <CharHeader  char={this.state.selectedChar} charname={this.state.charName} />
        </div>
        <div className="support_rows">
          {this.renderRows(
            this.findSupports(this.selectedChar).support.length,
            this.findSupports(this.selectedChar))
          }
        </div>
      </div>
    );
  }
}

export default CharGrid;
