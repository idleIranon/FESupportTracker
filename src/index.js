import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar.js';
import CharGrid from './charactergrid.js'
import chars from './characters.json'
import './App.css';
import LostItemTable from './lostitemtable.js'

import { Layout } from 'antd';

var currentchar = "byleth";
console.log(chars);

function App() {

  const { Content, Sider } = Layout;
  return (
    <div className="App">
      <Layout>
        <Sider>
          <Sidebar selectedCharName= {currentchar}/>
        </Sider>

        <Layout>
          <Content style={{padding: '0 50px'}}>
            <p>Soon to be filled with excellent content</p>
            <LostItemTable />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
