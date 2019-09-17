import React from 'react';

import { Card, Button } from 'antd';

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

  renderButtons() {
    let buttons = [];

  }


  render() {
    return (
      <Card
        cover={
          <img
            alt={this.state.coverName}
            src={`/character_images/feth-${this.props.charName.toLowerCase()}-portrait.jpg`}
          />
        }
        actions={[
            <Button>C</Button>,
            <Button>B</Button>,
            <Button>A</Button>
        ]}
      >
        <Meta
          title={this.props.character.name}
          description="This is the description"
        />

      </Card>
    );
  }
}

export default CharCard;
