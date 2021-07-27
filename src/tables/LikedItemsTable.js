import React from 'react';

import { Table, Avatar } from 'antd';

import likedItems from '../json/likeditems.json';


const likedItemList = likedItems.likedItemList;

for(var i = 0; i < likedItemList.length; i++) {
  if(typeof likedItemList[i].gifts === 'object'){
    var thisGift = likedItemList[i].gifts;
    for(var j = 0; j < thisGift.length-1; j++) {
      thisGift[j] = thisGift[j].concat(", ");
    }
  }
}


const tableColumns = [
  {
    dataIndex: 'character',
    key: 'charactericon',
    width: '10%',
    render: (text) => {
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
    title: 'Gifts',
    dataIndex: 'gifts',
    key: 'gifts',
    width: '35%'
  },
  {
    title: 'Favorite tea',
    dataIndex: 'preferredTea',
    key: 'preferredTea',
    width: '35%',
  }
]


class LikedItemsTable extends React.Component {
  render() {
    return (
        <Table
         className="item_table"
         dataSource={likedItemList}
         columns={tableColumns}
         rowKey="character"
         pagination={false}
         scroll={{ y: "95vh" }}
         size='small'
       />
    );
  }
}

export default LikedItemsTable;
