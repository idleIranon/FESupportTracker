import React from 'react';
import recruitment from './recruitment.json';

import { Table } from 'antd';

const recruitmentInfo = recruitment.recruitment;


const tableColumns = [
  {
    title: 'Character',
    dataIndex: 'character',
    key: 'character',
    width: 500,
    sorter: (a, b) => { return a.character.localeCompare(b.character)}
  },
  {
    title: 'Skill',
    dataIndex: 'skill',
    key: 'skill'
  },
  {
    title: 'Stat',
    dataIndex: 'stat',
    key: 'stat'
  },
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

class RecruitmentTable extends React.Component {
  render() {
    return (
      <Table
       dataSource={recruitmentInfo}
       rowSelection={rowSelection}
       columns={tableColumns}
       pagination={false}
       scroll={{ y: 850 }}
       size='small'
     />
    );
  }
}

export default RecruitmentTable;
