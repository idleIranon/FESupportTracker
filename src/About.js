import React from 'react';
import styled from 'styled-components';

import { Layout } from 'antd';


const { Content } = Layout;

const AboutContent = styled(Content)`
  padding: 24px; 
  padding-left: 40px; 
  background: #fff; 
  min-height: 200px;
`;


function About() {
  return (
    <AboutContent>
      <p> Website developed 2021 by Renee McMillan-Tolley </p>
      <p> Want to find out more about how this was done? Check out the source code
        <a
          href="https://github.com/idleIranon/FESupportTracker"
          target="_blank"
          rel="noopener noreferrer">
          {' '}
          here!
        </a>
      </p>
  </AboutContent>
  );
}

export default About;
