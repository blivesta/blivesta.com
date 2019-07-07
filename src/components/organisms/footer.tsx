import * as React from 'react';
import styled from 'styled-components';

import { vars } from '../../styles';

import Container from '../atoms/container';
import Lists from '../atoms/lists';

const Wrapper = styled.footer`
  background-repeat: repeat-x;
  background-image: url('/images/footer-bg.svg');
  background-position: left bottom;
  background-size: 100%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5vw;
  padding-bottom: 25vw;
`;

const CopyRight = styled.p`
  margin: 0;
  position: fixed;
  top: 50%;
  left: -16px;
  font-family: ${vars.fontFamily.roboto};
  font-size: 12px;
  line-height: 0;
  transform: rotate(-90deg);
  transform-origin: center;
`;

interface FooterProps {
  siteTitle: string;
}

const Footer = ({ siteTitle }: FooterProps) => (
  <Wrapper>
    <Container>
      <Flex>
        <Lists>
          <li>
            <a href="https://github.com/blivesta" target="_blank" rel="noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/blivesta" target="_blank" rel="noopener">
              dribbble
            </a>
          </li>
          <li>
            <a href="https://instagram.com/blivesta" target="_blank" rel="noopener">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/blivesta" target="_blank" rel="noopener">
              Twitter
            </a>
          </li>
        </Lists>
      </Flex>
      <CopyRight>
        &copy; {new Date().getFullYear()} {siteTitle}
      </CopyRight>
    </Container>
  </Wrapper>
);

export default Footer;
