import React from 'react';
import recruitment from './recruitment.json';

import { Table, Avatar } from 'antd';

const recruitmentInfo = recruitment.recruitment;


const tableColumns = [
  {
    dataIndex: 'character',
    key: 'charactericon',
    width: '5%',
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
    width: '10%',
    sorter: (a, b) => { return a.character.localeCompare(b.character)}
  },
  {
    title: 'Skill',
    dataIndex: 'skill',
    key: 'skill',
    width: '40%'
  },
  {
    title: 'Stat',
    dataIndex: 'stat',
    key: 'stat',
    width: '40%'
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
       scroll={{ y: "95vh" }}
       size='small'
     />
    );
  }
}

export default RecruitmentTable;
