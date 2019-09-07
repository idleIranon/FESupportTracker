import React from 'react';
import chars from './characters.json';

import { Card, Button, Row } from 'antd';

const { Meta } = Card;
const ButtonGroup = Button.Group;

class CharCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coverName: "Test",
      coverSrc: "/character_images/feth-byleth-female-portrait.jpg",
      charName: "Test",
      description: "Test",
      supports: [],
    };
  }

  render() {

    return (
      <Card
        cover={
          <img
            alt={this.state.coverName}
            src={this.state.coverSrc}
          />
        }
        actions={[
            <Button>C</Button>,
            <Button>B</Button>,
            <Button>A</Button>
        ]}
      >
        <Meta
          title={this.state.charName}
          description="This is the description"
        />

      </Card>
    );
  }
}

export default CharCard;
