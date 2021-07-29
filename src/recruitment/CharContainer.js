import React, { useEffect, useState } from 'react';

import { Row, Col, Layout } from 'antd';

import CharGrid from './CharGrid.js';
import CharHeader from './CharHeader.js';
import CharSidebar from './CharSidebar.js'

const { Content } = Layout;


//TODO - Add logic to track selected support char here 
function CharContainer() {
    const [selectedSupportChar, setSelectedSupportChar] = useState(
        (localStorage.getItem('selectedSupportChar') ?? 'linhardt')
      );

      useEffect(() => {
        localStorage.setItem('selectedSupportChar', selectedSupportChar)
        localStorage.setItem('selectedSupportCharIcon', `/character_images/feth-` + selectedSupportChar + `-portrait.jpg`  )
      }, [selectedSupportChar])

  return (
      <Layout style={{height: "100vh"}}>
        <Row type="flex" justify="start">
          <Col span="3">
            <CharSidebar />
          </Col>

        </Row>
        <Row type="flex" justify="start">
          <Col span="24">
            <CharHeader />
          </Col>
          <Col span="24">
            <Content>
              <CharGrid />
            </Content>
          </Col>
        </Row>
      </Layout>
    );
}

export default CharContainer;
