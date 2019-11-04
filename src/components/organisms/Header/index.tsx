import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import IconMail from '../../../assets/icons/mail.svg';
import IconHome from '../../../assets/icons/home.svg';
import IconSun from '../../../assets/icons/sunny.svg';
import IconMoon from '../../../assets/icons/moon.svg';
import LogoType from '../../molecules/LogoType';
import Container from '../../atoms/Container';

const StyledHeader = styled.header`
  height: 128px;
  margin-bottom: ${({ theme }) => theme.spaces[8]};
  position: relative;
`;

const StyledContainer = styled(Container)<HeaderProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.pageLocation === '/' ? 'flex-end' : 'space-between')};
`;

const Nav = styled.nav`
  font-size: ${({ theme }) => theme.fontSizes[1]};

  & svg {
    fill: ${({ theme }) => theme.colors.baseText[0]};
    width: 20px;
    height: 20px;
    margin-top: -4px;
  }
`;

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

const ModeButton = styled.div`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.baseText[0]};
  transition: opacity ${({ theme }) => theme.transition};
  will-change: opacity;

  &:hover {
    opacity: 0.6;
  }
`;

interface HeaderProps {
  siteTitle: string;
  pageLocation: string;
  themeState?: string | null;
  themeSwich?: () => void;
}

const Header = ({ siteTitle, pageLocation, themeSwich, themeState }: HeaderProps) => {
  const themeToggle = () => {
    return themeSwich && themeSwich();
  };

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
                  <IconMail />
                </Link>
              ) : (
                <Link to="/" title="home">
                  <IconHome />
                </Link>
              )}
            </Li>
            <Li>
              <ModeButton onClick={themeToggle} onKeyPress={themeToggle} role="button" tabIndex={0}>
                {themeState === 'light' ? <IconMoon /> : <IconSun />}
              </ModeButton>
            </Li>
          </Ul>
        </Nav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
