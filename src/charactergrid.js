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
      charName: "byleth",
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
      if (chars.characters[i].name === "byleth-male"){
        return chars.characters[i];
      }
    }
  }

  renderRows(numSupports, char) {
    //Fundtion to calc how many rows will be needed
    var minCardWidth = 265;
    var sidebar_width = 200;
    var cardsPerRow = Math.round((this.state.width-sidebar_width)/minCardWidth);
    let numRows = Math.ceil(numSupports/cardsPerRow);
    var charIndex = 0;
    let rows = [];
    for (var i = 0; i < numRows; i++) {
      //Generate the cards and add them to an array
      let cards = [];
      for (var j = 0; j < cardsPerRow; j++) {
        if(typeof char.support[charIndex] === 'undefined') {}
        else {
          cards.push(this.renderCard(char.support[charIndex], cardsPerRow));
        }
        charIndex++;
      }
      //Add the cards array between the rows
      rows.push(<Row type="flex" gutter={16} className="Row">{cards}</Row>)
    }
    return ( <div> {rows} </div> );
  }

  renderCard(character, span) {
    return (
      <Col span={24/span}>
        <CharCard character={character} charName={character.name}>
        </CharCard>
      </Col>
    );
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
