import React from 'react';

import { Card, Button, Row, Col, Icon } from 'antd';

const { Meta } = Card;
const ButtonGroup = Button.Group;

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

  renderButton(rank, length) {
    var span_length = 24/length;
    if (rank.charAt(rank.length-1) === "+") {
      console.log("Thats a plus");
      return (
        <Col span={span_length}>
          <Button className="support_rank_button">
            {rank[0]}
            <Icon type="right" className="support_icon"/>
            <Icon type="right" className="support_icon"/>
          </Button>
        </Col>
      )
    }
    return (
        <Col span={span_length}>
          <Button className="support_rank_button"> {rank} </Button>
        </Col>
    )
  }


  renderButtons(ranks) {
    let buttons = [];
    for (var i = 0; i < ranks.length; i++) {
      buttons.push(this.renderButton(ranks[i], ranks.length));
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
        <Row type="flex" width="100%" justify="center" align="center">{this.renderButtons(this.props.character.ranks)}</Row>
      </Card>
    );
  }
}

export default CharCard;
