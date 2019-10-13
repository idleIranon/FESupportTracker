import React from 'react';
import teas from './teatime.json';

import { Table, Avatar } from 'antd';

const favTea = teas.teaTime;

for(var i = 0; i < favTea.length; i++) {
  console.log(favTea[i].preferredTea);
  if(favTea[i].preferredTea ===Array){
    console.log("Its an array woo");
  }
}

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
    width: '20%',
    sorter: (a, b) => { return a.character.localeCompare(b.character)}
  },
  {
    title: 'Favorite tea',
    dataIndex: 'preferredTea',
    key: 'preferredTea',
    width: '80%',
    render: (text) => {
      if(typeof text === 'object') {
        for(var i = 0; i < text.length-1; i++) {
          text[i] = text[i].concat(", ");
        }
      }
      return (
        <div>
            {text}
        </div>
      );
    }
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
