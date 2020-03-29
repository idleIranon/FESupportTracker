import React from 'react';
import gifts from './json/giftlist.json';

import { Table, Avatar } from 'antd';

const giftList = gifts.giftList;

for(var i = 0; i < giftList.length; i++) {
  if(typeof giftList[i].gifts === 'object'){
    var thisGift = giftList[i].gifts;
    for(var j = 0; j < thisGift.length-1; j++) {
      thisGift[j] = thisGift[j].concat(", ");
    }
  }
}

const tableColumns = [
  {
    dataIndex: 'character',
    key: 'charactericon',
    width: '10%',
    render: (text, row, index) => {
      var charIcon = `/character_images/feth-${text.toLowerCase()}-portrait.jpg`;
      return (
          <Avatar src={charIcon} shape="square" size="large">
            {text}
          </Avatar>
      );
    }
  },
  {
    title: 'Character',
    dataIndex: 'character',
    key: 'character',
    width: '20%',
    sorter: (a, b) => { return a.character.localeCompare(b.character)}
  },
  {
    title: 'Gifts',
    dataIndex: 'gifts',
    key: 'gifts',
    width: '70%'
  }
]

class GiftTable extends React.Component {
  render() {
    return (
      <div className="item_table">
        <Table
         dataSource={giftList}
         columns={tableColumns}
         rowKey="character"
         pagination={false}
         scroll={{ y: "95vh" }}
         size='small'
       />
     </div>
    );
  }
}

export default GiftTable;
