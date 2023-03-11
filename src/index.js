import React from 'react';
import {createRoot} from 'react-dom/client';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './global/Sidebar.js';
import LayoutContainer from './global/LayoutContainer.js';
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import store from './redux/store.js'
import './App.css';


//const thisStore = createStore()

const StyledLayout = styled(Layout)`
  text-align: center;
  height: 100vh;
  width: 100vw;
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

const container = document.getElementById('root');

const root = createRoot(
  container
  );


  root.render(    <BrowserRouter>
    <App />
  </BrowserRouter>);
