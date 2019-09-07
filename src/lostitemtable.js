import React from 'react';
import ReactDOM from 'react-dom';
import items from './lostitems.json';

import { Table } from 'antd';

const lostItems = items.items

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Character',
    dataIndex: 'character',
    key: 'character'
  },
  {
    title: 'Chapter',
    dataIndex: 'chapter',
    key: 'chapter'
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location'
  },
  {
    title: 'Exclusive',
    dataIndex: 'exclusive',
    key: 'exclusive'
  }
]

class LostItemTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
	<Table dataSource={lostItems} columns={tableColumns} pagination={false}
  scroll={{ y: 850 }} />
    );
  }
}

export default LostItemTable;
