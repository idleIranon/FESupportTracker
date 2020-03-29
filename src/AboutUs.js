import React from 'react';

import { Layout } from 'antd';
const { Content } = Layout;

class AboutUs extends React.Component {
  render() {
    return (
      <Content style={{padding: '24px', 'padding-left': '40px'}}>
        <div className="about_us_paragraph">
          <p>Website developed 2019 by Renee McMillan-Tolley & Simon Rezazadeh</p>
        <p>
        Want to find out more about how this was done? Check out our source code 
          <a
            href="https://github.com/idleIranon/FESupportTracker"
            target="_blank"
            rel="noopener noreferrer">
            here!
          </a>
        </p>
      </div>
    </Content>

    );
  }
}

export default AboutUs;
