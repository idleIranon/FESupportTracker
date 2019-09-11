import React from 'react';
import gifts from './giftlist.json';

import { Table } from 'antd';

const giftList = gifts.giftList;

const tableColumns = [
  {
    title: 'Character',
    dataIndex: 'character',
    key: 'character',
    width: 500
  },
  {
    title: 'Gifts',
    dataIndex: 'gifts',
    key: 'gifts'
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
