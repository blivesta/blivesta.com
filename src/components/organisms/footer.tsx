import * as React from 'react';
import styled from 'styled-components';

import { vars } from '../../styles';

import Container from '../atoms/container';
import Li from '../atoms/li';
import Ul from '../atoms/ul';

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
  left: -28px;
  font-family: ${vars.fontFamily.roboto};
  font-size: 12px;
  line-height: 0;
  transform: rotate(90deg);
`;

interface FooterProps {
  siteTitle: string;
}

const Footer = ({ siteTitle }: FooterProps) => (
  <Wrapper>
    <Container>
      <Flex>
        <Ul>
          <Li>
            <a href="#" target="_blank" rel="noopener">
              GitHub
            </a>
          </Li>
          <Li>
            <a href="#" target="_blank" rel="noopener">
              dribbble
            </a>
          </Li>
          <Li>
            <a href="#" target="_blank" rel="noopener">
              Instagram
            </a>
          </Li>
          <Li>
            <a href="#" target="_blank" rel="noopener">
              Twitter
            </a>
          </Li>
        </Ul>
      </Flex>
      <CopyRight>
        &copy; {new Date().getFullYear()} {siteTitle}
      </CopyRight>
    </Container>
  </Wrapper>
);

export default Footer;
