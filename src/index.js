import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './Sidebar.js';
import LayoutContainer from './LayoutContainer.js';
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import store from './redux/store.js'
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

//const thisStore = createStore()

function App() {
  return (
    <div className="App">
      <Layout>
        <Sidebar />
        <LayoutContainer />
      </Layout>
    </div>
  );
}


ReactDOM.render(
  //<Provider store={thisStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  //</Provider>,
  document.getElementById('root'));
