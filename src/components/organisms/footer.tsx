import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Container from '../atoms/container';

const Wrapper = styled.footer``;

interface FooterProps {
  siteTitle: string;
}

const Footer = ({ siteTitle }: FooterProps) => (
  <Wrapper>
    <Container>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
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
      </div>
      © {new Date().getFullYear()} {siteTitle}
    </Container>
  </Wrapper>
);

export default Footer;
