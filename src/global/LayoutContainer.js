import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import CharContainer from '../recruitment/CharContainer.js';
import RecruitmentTable from '../tables/RecruitmentTable.js';
import LikedItemTable from '../tables/LikedItemsTable.js';
import LostItemTable from '../tables/LostItemTable.js';
import About from '../About.js';
import '../App.css';


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
            <Routes>
              <Route
                path="/"
                element={<CharContainer/>}
                exact
              />
              <Route
                path="/recruitment"
                element={<RecruitmentTable/>}
                exact
              />
              <Route
                path="/lostitems"
                element={<LostItemTable/>}
                exact
              />
              <Route
                path="/favitems"
                element={<LikedItemTable/>}
                exact
              />
              <Route
                path="/about"
                element={<About/>}
                exact
              />
            </Routes>
          </Content>
        </Layout>
    );
  }
}


export default LayoutContainer;
