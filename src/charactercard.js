import React from 'react';
import chars from './characters.json';

import { Card, Icon, Button } from 'antd';

const { Meta } = Card;

class CharCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      coverName: "Test",
      coverSrc: "/character_images/feth-byleth-female-portrait.jpg",
      title: "Test",
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
      }>
      </Card>
    );
  }
}

export default CharCard;
