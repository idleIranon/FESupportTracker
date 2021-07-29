import React, { useEffect, useState } from 'react';

import { Row, Col } from 'antd';

import CharGrid from './CharGrid.js';
import CharHeader from './CharHeader.js';
import CharSidebar from './CharSidebar.js'


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
    <div className="char_header">
        <CharHeader />
        <Row type="flex" justify="start">
          <Col span="3">
            <CharSidebar />
          </Col>
          <Col span="20">
            <CharGrid />
          </Col>
        </Row>
    </div>
    );
}

export default CharContainer;
