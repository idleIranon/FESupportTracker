import React from 'react';
import items from './lostitems.json';

import { Table, Avatar } from 'antd';

const lostItems = items.items;

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'left',
    width: '30%',
    sorter: (a, b) => { return a.name.localeCompare(b.name)}
  },
  {
    title: 'Character',
    dataIndex: 'character',
    key: 'character',
    align: 'left',
    width: '20%',
    sorter: (a, b) => { return a.character.localeCompare(b.character)},
    filters: [
      {text: "Alois", value: "Alois"},
      {text: "Annette", value: "Annette"},
      {text: "Ashe", value: "Ashe"},
      {text: "Bernadetta", value: "Bernadetta"},
      {text: "Caspar", value: "Caspar"},
      {text: "Catherine", value: "Catherine"},
      {text: "Claude", value: "Claude"},
      {text: "Cyril", value: "Cyril"},
      {text: "Dedue", value: "Dedue"},
      {text: "Dimitri", value: "Dimitri"},
      {text: "Dorothea", value: "Dorothea"},
      {text: "Edelgard", value: "Edelgard"},
      {text: "Felix", value: "Felix"},
      {text: "Ferdinand", value: "Ferdinand"},
      {text: "Flayn", value: "Flayn"},
      {text: "Gilbert", value: "Gilbert"},
      {text: "Hanneman", value: "Hanneman"},
      {text: "Hilda", value: "Hilda"},
      {text: "Hubert", value: "Hubert"},
      {text: "Ignatz", value: "Ignatz"},
      {text: "Ingrid", value: "Ingird"},
      {text: "Jeralt", value: "Jeralt"},
      {text: "Leonie", value: "Leonie"},
      {text: "Linhardt", value: "Linhardt"},
      {text: "Lorenz", value: "Lorenz"},
      {text: "Lysithea", value: "Lysithea"},
      {text: "Manuela", value: "Manuela"},
      {text: "Marianne", value: "Marianne"},
      {text: "Mercedes", value: "Mercedes"},
      {text: "Petra", value: "Petra"},
      {text: "Raphael", value: "Raphael"},
      {text: "Seteth", value: "Seteth"},
      {text: "Shamir", value: "Shamir"},
      {text: "Sylvain", value: "Sylvain"}
    ],
    onFilter: (value, record) => record.character.indexOf(value) === 0,
  },
  {
    title: 'Chapter',
    dataIndex: 'chapter',
    key: 'chapter',
    width: '10%',
    sorter: (a, b) => a.chapter - b.chapter,
    filters: [
      {text: "3", value: "3"},
      {text: "4", value: "4"},
      {text: "5", value: "5"},
      {text: "6", value: "6"},
      {text: "7", value: "7"},
      {text: "8", value: "8"},
      {text: "9", value: "9"},
      {text: "10", value: "10"},
      {text: "11", value: "11"}
    ],
    onFilter: (value, record) => record.chapter.indexOf(value) === 0,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    width: '30%'
  },
  {
    title: 'Exclusive',
    dataIndex: 'exclusive',
    key: 'exclusive',
    width: '10%',
    render: (text, row, index) => {
      var houseIcon = `./${text}logo.png`;
      if (text != null)
      return (
          <Avatar src={houseIcon} shape="square" size="large">
            {text}
          </Avatar>
        );
  }
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
