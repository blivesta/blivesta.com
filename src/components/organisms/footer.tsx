import * as React from 'react';
import styled from 'styled-components';

import { vars } from '../../styles';

import Container from '../atoms/container';

const Wrapper = styled.footer`
  background-repeat: repeat-x;
  background-image: url('/images/footer-bg.svg');
  background-position: left bottom;
  background-size: 100%;
  /* height: 400px; */
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
      <ul>
        <li>
          <a href="#" target="_blank" rel="noopener">
            GitHub
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener">
            dribbble
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener">
            Twitter
          </a>
        </li>
      </ul>
      <CopyRight>
        &copy; {new Date().getFullYear()} {siteTitle}
      </CopyRight>
    </Container>
  </Wrapper>
);

export default Footer;
