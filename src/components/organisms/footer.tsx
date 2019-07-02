import React from 'react';
import styled from 'styled-components';

import Container from '../atoms/container';

const Wrapper = styled.footer`
  background-repeat: repeat-x;
  background-image: url('/images/footer-bg.svg');
  background-position: left bottom;
  background-size: 50%;
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
      © {new Date().getFullYear()} {siteTitle}
    </Container>
  </Wrapper>
);

export default Footer;
