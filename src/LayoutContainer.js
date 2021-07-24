import React from 'react';

import CharGrid from './charGrid.js';
import RecruitmentTable from './recruitmentTable.js';
import TeaTable from './teaTable.js';
import GiftTable from './giftTable.js';
import AboutUs from './about.js';
import LostItemTable from './lostItemTable.js';
import './App.css';

import { Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;


class LayoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  //3 functions to handle watching screen size to adjust # num of cards per row
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


  render() {
    return (
        <Layout>
          <Content>
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
              component={AboutUs}
              exact
            />
          </Content>
        </Layout>
    );
  }
}


export default LayoutContainer;
