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
    width: '15%',
    sorter: (a, b) => { return a.character.localeCompare(b.character)}
  },
  {
    title: 'Skill',
    dataIndex: 'skill',
    key: 'skill',
    width: '35%'
  },
  {
    title: 'Stat',
    dataIndex: 'stat',
    key: 'stat',
    width: '35%'
  },
  {
    title: 'House',
    dataIndex: 'house',
    key: 'house',
    width: '10%',
    filters: [
      {text: `Black Eagle`, value: "be"},
      {text: `Blue Lion`, value: "bl"},
      {text: `Golden Deer`, value: "gd"}
    ],
    onFilter: (value, record) => record.house.indexOf(value) === 0,
    render: (text, row, index) => {
      var houseIcon = `./${text}logo.png`;
      if (text != null)
      return (
          <Avatar src={houseIcon} shape="square" size="medium">
            {text}
          </Avatar>
        );
      },
  }
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
      <div className="item_table">
        <Table
         dataSource={recruitmentInfo}
         rowSelection={rowSelection}
         columns={tableColumns}
         pagination={false}
         scroll={{ y: "95vh" }}
         size='small'
       />
      </div>
    );
  }
}

export default RecruitmentTable;
