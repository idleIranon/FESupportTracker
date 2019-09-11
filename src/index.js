import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar.js';
import CharGrid from './charactergrid.js';
import RecruitmentTable from './recruitmenttable.js';
import TeaTable from './teatable.js';
import GiftTable from './gifttable.js';
import AboutSection from './about.js';
import LostItemTable from './lostitemtable.js';
import './App.css';

import { Route, BrowserRouter } from 'react-router-dom';

import { Layout } from 'antd';

var currentchar = "byleth";

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
              path="/recruitment"
              component={RecruitmentTable}
              exact
            />
            <Route
              path="/lostitems"
              component={LostItemTable}
              exact
            />
            <Route
              path="/tea"
              component={TeaTable}
              exact
            />
            <Route
              path="/gifts"
              component={GiftTable}
              exact
            />
            <Route
              path="/about"
              component={AboutSection}
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
