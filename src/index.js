import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.js';
import './App.css';

import { Layout, Button } from 'antd';


function App() {
  const { Content, Sider } = Layout;
  return (
    <div className="App">
      <Layout>
        <Sider> <Sidebar /> </Sider>
          <Content>
            <p>Soon to be filled with excellent content</p>
          </Content>

      </Layout>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
