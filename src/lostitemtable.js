import React from 'react';
import items from './lostitems.json';

import { Table } from 'antd';

const lostItems = items.items;

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'left',
    width: 300,
    sorter: (a, b) => { return a.name.localeCompare(b.name)}
  },
  {
    title: 'Character',
    dataIndex: 'character',
    key: 'character',
    align: 'left',
    width: 300,
    sorter: (a, b) => { return a.character.localeCompare(b.character)}
  },
  {
    title: 'Chapter',
    dataIndex: 'chapter',
    key: 'chapter',
    width: 150,
    sorter: (a, b) => a.chapter - b.chapter
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    width: 300
  },
  {
    title: 'Exclusive',
    dataIndex: 'exclusive',
    key: 'exclusive',
    width: 150
  }
]


class LostItemTable extends React.Component {
  render() {
    return (
	     <Table
        dataSource={lostItems}
        columns={tableColumns}
        pagination={false}
        scroll={{ y: 850 }}
        size='small'
      />
    );
  }
}

export default LostItemTable;
