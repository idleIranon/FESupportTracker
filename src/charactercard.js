import React from 'react';

import { Card, Button, Row } from 'antd';

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
    return (
      <Button> {rank} </Button>
    )
  }


  renderButtons(ranks) {
    let buttons = [];
    console.log({ranks});
    for (var i = 0; i < ranks.length; i++) {
      console.log(ranks[i]);

      buttons.push(this.renderButton(ranks[i]));
    }
    console.log({buttons});
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
