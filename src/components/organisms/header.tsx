import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { vars } from '../../styles';

import Lists from '../atoms/lists';

import ContentBlock from '../molecules/content-block';

import Logo from '../../assets/inline-svg/logo.svg';

const Wrapper = styled.header`
  background-repeat: repeat-x;
  background-image: url(/images/ruler.svg);
  background-size: 50px;
  background-attachment: fixed;
`;

const H1 = styled.h1`
  font-family: ${vars.fontFamily.avantGarde};
  font-weight: 700;
  font-size: 96px;
  margin-top: -8px;
  margin-bottom: 8px;
  line-height: 1;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: ${vars.fontFamily.roboto};
  margin-top: 0;
  margin-bottom: 0;
`;

const P = styled.p`
  font-family: ${vars.fontFamily.roboto};
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 16px;
  letter-spacing: 0.15em;
`;

const Nav = styled.nav`
  padding-top: 32px;
`;

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <Wrapper>
    <ContentBlock
      logo={
        <Link to="/">
          <Logo />
        </Link>
      }
    >
      <H1>{siteTitle}</H1>
      <P>Yasuyuki Enomoto</P>
      <H2>Design engineering and Content storategy.</H2>
      <Nav>
        <Lists>
          {/* <li>
            <Link to="/#about">ABOUT</Link>
          </li>
          <li>
            <Link to="/#oss">OPEN SOUECE PROJECTS</Link>
          </li> */}
          <li>
            <Link to="/contact">CONTACT </Link>
          </li>
        </Lists>
      </Nav>
    </ContentBlock>
  </Wrapper>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
