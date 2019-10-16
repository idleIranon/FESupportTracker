import React from 'react';
import gifts from './giftlist.json';

import { Table } from 'antd';

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
    width: '80%'
  }
]

class GiftTable extends React.Component {
  render() {
    return (
      <div className="item_table">
        <Table
         dataSource={giftList}
         columns={tableColumns}
         pagination={false}
         scroll={{ y: "95vh" }}
         size='small'
       />
     </div>
    );
  }
}

export default GiftTable;
