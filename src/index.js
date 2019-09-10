import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar.js';
import CharGrid from './charactergrid.js';
import chars from './characters.json';
import './App.css';
import LostItemTable from './lostitemtable.js';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

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
          <p>Soon to be filled with excellent content</p>
          <Content style={{padding: '0 50px'}}>
            <Route
              path="/"
              component={CharGrid}
              exact
            />
            <Route
              path="/lostitems"
              component={LostItemTable}
              exact
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
