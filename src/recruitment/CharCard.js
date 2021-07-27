import React from 'react';
import styled from 'styled-components';

import { Card, Button, Row, Col } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';


const { Meta } = Card;

const StyledCharCard = styled(Card)`
    .support_icon {
      font-size: 7px;
      width: 25%;
      vertical-align: top;
    }
`;

const StyledCardButton = styled(Button)`
  width: 100%;
`;


class CharCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bordered: "true",
      coverName: "Test",
      charName: "Byleth-Female",
      description: "Test",
      supports: [],
      highestSupport: "C"
    };
  }

  renderButton(rank, length, counter) {
    var span_length = 24/length;
    if (rank.charAt(rank.length-1) === "+") {
      return (
        <Col key={this.state.charName + counter} span={span_length}>
          <StyledCardButton className="support_rank_button" key="support_buttons">
            {rank[0]}
            <DoubleRightOutlined type="right" className="support_icon" key="plus"/>
          </StyledCardButton>
        </Col>
      )
    }
    return (
        <Col key={this.state.charName + "basic" +  counter} span={span_length}>
          <StyledCardButton className="support_rank_button"> {rank} </StyledCardButton>
        </Col>
    )
  }

  renderButtons(ranks) {
    let buttons = [];
    for (var i = 0; i < ranks.length; i++) {
      buttons.push(this.renderButton(ranks[i], ranks.length, i));
    }
    return ( buttons )
  }

  render() {
    return (
      <StyledCharCard
        cover= {
          <img
            alt={this.state.coverName}
            src={`/character_images/feth-${this.props.charName.toLowerCase()}-portrait.jpg`}
          />
        }
        title={this.props.character.name}
      >
        <Row type="flex" width="100%" justify="center" align="middle" span="24">{this.renderButtons(this.props.character.ranks)}</Row>
      </StyledCharCard>
    );
  }
}

export default CharCard;
