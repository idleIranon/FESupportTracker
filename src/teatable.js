import React from 'react';
import teas from './teatime.json';

import { Table } from 'antd';

const favTea = teas.teaTime;

const tableColumns = [
  {
    title: 'Character',
    dataIndex: 'character',
    key: 'character',
    width: '30%',
    sorter: (a, b) => { return a.name.localeCompare(b.name)}
  },
  {
    title: 'Favorite tea',
    dataIndex: 'preferredTea',
    key: 'preferredTea',
    width: '30%'
  }
]

class TeaTable extends React.Component {
  render() {
    return (
      <Table
        dataSource={favTea}
        columns={tableColumns}
        pagination={false}
        scroll={{ y: 850 }}
        size='small'
      />
    );
  }
}

export default TeaTable;
