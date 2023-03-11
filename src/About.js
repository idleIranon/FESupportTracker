import React from 'react';
import styled from 'styled-components';

import { Layout } from 'antd';


const { Content } = Layout;

const AboutContent = styled(Content)`
  padding: 24px; 
  padding-left: 40px; 
  background: #fff; 
  min-height: 10em;
`;


function About() {
  return (
    <AboutContent>
      <p>2023</p>
      <p>Renee McMillan</p>
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
