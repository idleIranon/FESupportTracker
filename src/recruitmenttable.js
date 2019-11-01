import React from 'react';
import recruitment from './recruitment.json';

import { Table, Avatar } from 'antd';

const recruitmentInfo = recruitment.recruitment;


const tableColumns = [
  {
    dataIndex: 'character',
    key: 'charactericon',
    width: '10%',
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
    width: '20%',
    sorter: (a, b) => { return a.character.localeCompare(b.character)}
  },
  {
    title: 'Skill',
    dataIndex: 'skill',
    key: 'skill',
    width: '25%'
  },
  {
    title: 'Stat',
    dataIndex: 'stat',
    key: 'stat',
    width: '25%'
  },
  {
    title: 'House',
    dataIndex: 'house',
    key: 'house',
    width: '20%',
    filters: [
      {text: `Black Eagles`, value: "be"},
      {text: `Blue Lions`, value: "bl"},
      {text: `Golden Deer`, value: "gd"}
    ],
    onFilter: (value, record) => record.house.indexOf(value) === 0,
    render: (text, row, index) => {
      var houseIcon = `./house_images/${text}logo.png`;
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
    localStorage.setItem('recruitment', selectedRowKeys);
    console.log(localStorage);
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    name: record.character,
  }),
};




class RecruitmentTable extends React.Component {

  componentDidMount() {
    localStorage.getItem('recruitment');
  }

  render() {
    return (
      <div className="item_table">
        <Table
         dataSource={recruitmentInfo}
         rowSelection={rowSelection}
         rowKey="character"
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
