import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Container from '../atoms/container';
import Logo from '../../assets/inline-svg/logo.svg';

const Wrapper = styled.header`
  background-repeat: repeat-x;
  background-image: url(/images/ruler.svg);
`;

const Name = styled.h1`
  font-family: itc-avant-garde-gothic-pro, sans-serif;
  font-weight: 700;
  font-style: normal;
`;

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <Wrapper>
    <Container>
      <Name>
        <Logo />
        <Link to="/">{siteTitle}</Link>
      </Name>
      <p>Yasuyuki Enomoto</p>
      <h2>Design engineering and Content storategy.</h2>
      <nav>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">OPEN SOUECE PROJECTS</a>
          </li>
          <li>
            <a href="#">CONTACT </a>
          </li>
        </ul>
      </nav>
    </Container>
  </Wrapper>
);

// Header.defaultProps = {
//   siteTitle: ``,
// };

export default Header;
