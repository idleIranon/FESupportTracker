import React from 'react';
import teas from './teatime.json';

import { Table } from 'antd';

const favTea = teas.teaTime;

const tableColumns = [
  {
    title: 'Character',
    dataIndex: 'character',
    key: 'character',
    width: '20%',
    sorter: (a, b) => { return a.character.localeCompare(b.character)}
  },
  {
    title: 'Favorite tea',
    dataIndex: 'preferredTea',
    key: 'preferredTea',
    width: '80%'
  }
]

class TeaTable extends React.Component {
  render() {
    return (
      <div className="item_table">
        <Table
          dataSource={favTea}
          columns={tableColumns}
          pagination={false}
          scroll={{ y: "95vh" }}
          size='small'
        />
      </div>
    );
  }
}

export default TeaTable;
