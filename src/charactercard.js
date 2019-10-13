import React from 'react';

import { Card, Button, Row, Icon } from 'antd';

const { Meta } = Card;

class CharCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coverName: "Test",
      charName: "Byleth-Female",
      description: "Test",
      supports: []
    };
  }

  renderButton(rank) {
    if (rank.charAt(rank.length-1) === "+") {
      console.log("Thats a plus");
      return (
        <Button> {rank[0]}<Icon type="right" /></Button>
      )
    }
    return (
      <Button> {rank} </Button>
    )
  }


  renderButtons(ranks) {
    let buttons = [];
    for (var i = 0; i < ranks.length; i++) {
      buttons.push(this.renderButton(ranks[i]));
    }
    return (
      <div>
        {buttons}
      </div>
    )
  }


  render() {
    return (
      <Card
        cover=
        {
          <img
            alt={this.state.coverName}
            src={`/character_images/feth-${this.props.charName.toLowerCase()}-portrait.jpg`}
          />
        }
      >
        <Meta
          title={this.props.character.name}
        />
        <Row>{this.renderButtons(this.props.character.ranks)}</Row>
      </Card>
    );
  }
}

export default CharCard;
