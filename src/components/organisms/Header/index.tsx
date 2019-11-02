import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Octicon, { Mail, Home } from '@primer/octicons-react';

import LogoType from '../../molecules/LogoType';
import Container from '../../atoms/Container';

const StyledHeader = styled.header`
  height: 128px;
  margin-bottom: ${props => props.theme.spaces[8]};
  position: relative;
`;

const StyledContainer = styled(Container)<HeaderProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.pageLocation === '/' ? 'flex-end' : 'space-between')};
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`;

const Li = styled.li`
  text-transform: uppercase;
  padding-right: ${props => props.theme.spaces[4]};

  &:last-child {
    padding-right: 0;
  }
`;

interface HeaderProps {
  siteTitle: string;
  pageLocation: string;
}

const Header = ({ siteTitle, pageLocation }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledContainer pageLocation={pageLocation} siteTitle={siteTitle}>
        {pageLocation !== '/' && (
          <Link to="/">
            <LogoType siteTitle={siteTitle} />
          </Link>
        )}
        <Nav>
          <Ul>
            <Li>
              {pageLocation === '/' ? (
                <Link to="/contact/" title="contact">
                  <Octicon icon={Mail} />
                </Link>
              ) : (
                <Link to="/" title="home">
                  <Octicon icon={Home} />
                </Link>
              )}
            </Li>
          </Ul>
        </Nav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
