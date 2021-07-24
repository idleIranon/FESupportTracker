import React from 'react';

import { Layout } from 'antd';
const { Content } = Layout;


class About extends React.Component {
  render() {
    return (
      <Content style={{padding: '24px', 'padding-left': '40px'}}>
        <div className="about_paragraph">
          <p>Website developed 2021 by Renee McMillan-Tolley</p>
        <p>
        Want to find out more about how this was done? Check out the source code
          <a
            href="https://github.com/idleIranon/FESupportTracker"
            target="_blank"
            rel="noopener noreferrer">
            {' '}
            here!
          </a>
        </p>
      </div>
    </Content>

    );
  }
}

export default About;
