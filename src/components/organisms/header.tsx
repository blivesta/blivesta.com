import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { vars } from '../../styles';

import Container from '../atoms/container';

import Logo from '../../assets/inline-svg/logo.svg';

const Wrapper = styled.header`
  background-repeat: repeat-x;
  background-image: url(/images/ruler.svg);
  background-size: 50px;
`;

const Flex = styled.div`
  display: flex;
  padding-top: 30vh;
  padding-bottom: 30vh;
`;

const Avatar = styled.div`
  width: 80px;
  margin-right: 16px;
  padding-top: 4px;
`;

const Contents = styled.div`
  flex: 1;

  h1 {
    font-family: ${vars.fontFamily.avantGarde};
    font-weight: 700;
    font-size: 88px;
    margin-top: 0;
    margin-bottom: 8px;
    line-height: 1;
  }

  p,
  h2 {
    font-family: ${vars.fontFamily.roboto};
    margin-top: 0;
    margin-bottom: 0;
  }

  h2 {
    font-size: 16px;
    font-weight: normal;
  }

  p {
    font-size: 24px;
    margin-bottom: 12px;
  }
`;

const Nav = styled.nav`
  padding-top: 32px;
`;

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
`;

const Li = styled.li`
  margin-right: 12px;
  letter-spacing: 0.15em;
  font-size: 14px;

  &:not(:last-child)::after {
    display: inline-flex;
    content: '|';
    margin-left: 12px;
  }

  a {
    text-decoration: none;
  }
`;

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <Wrapper>
    <Container>
      <Flex>
        <Avatar>
          <Link to="/">
            <Logo />
          </Link>
        </Avatar>
        <Contents>
          <h1>{siteTitle}</h1>
          <p>Yasuyuki Enomoto</p>
          <h2>Design engineering and Content storategy.</h2>
          <Nav>
            <Ul>
              <Li>
                <Link to="/#about">ABOUT</Link>
              </Li>
              <Li>
                <Link to="/#oss">OPEN SOUECE PROJECTS</Link>
              </Li>
              <Li>
                <Link to="/contact">CONTACT </Link>
              </Li>
            </Ul>
          </Nav>
        </Contents>
      </Flex>
    </Container>
  </Wrapper>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
