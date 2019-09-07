import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar.js';
import CharGrid from './charactergrid.js'
import chars from './characters.json'
import './App.css';

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
          <Content>
            <p>Soon to be filled with excellent content</p>
            <CharGrid>
            </CharGrid>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
