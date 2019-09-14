import React from 'react';
import gifts from './giftlist.json';

import { Table } from 'antd';

const giftList = gifts.giftList;

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
      <Table
       dataSource={giftList}
       columns={tableColumns}
       pagination={false}
       scroll={{ y: 850 }}
       size='small'
     />
    );
  }
}

export default GiftTable;
