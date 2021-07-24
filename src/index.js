import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './Sidebar.js';
import LayoutContainer from './LayoutContainer.js';
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import store from './redux/store.js'
import './App.css';


//const thisStore = createStore()

const StyledLayout = styled(Layout)`
  text-align: center;
  height: 100%;
  background: #c9a941;
`;


function App() {
  return (
    <StyledLayout>
      <Sidebar />
      <LayoutContainer />
    </StyledLayout>
  );
}

ReactDOM.render(
  //<Provider store={thisStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  //</Provider>,
  document.getElementById('root'));
