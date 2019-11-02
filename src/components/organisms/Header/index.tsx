import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from '../../atoms/Logo';
import Container from '../../atoms/Container';
import ContentBlock from '../../molecules/ContentBlock';

const Wrapper = styled.header``;

const HomeH1 = styled.h1`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes[7]};
  margin-top: -8px;
  margin-bottom: ${props => props.theme.spaces[1]};
  line-height: 1;

  ${props => props.theme.media.sm`
    font-size: ${props.theme.fontSizes[8]};
  `}
`;

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes[3]};
  margin-bottom: 0;
  line-height: 1;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
`;

const P = styled.p`
  font-family: ${props => props.theme.fonts.en};
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props => props.theme.colors.baseText[2]};
  margin-bottom: 0;

  ${props => props.theme.media.sm`
    font-size: ${props.theme.fontSizes[3]};
  `}
`;

const Navbar = styled.nav`
  height: 128px;
  padding-top: ${props => props.theme.spaces[6]};
  margin-bottom: ${props => props.theme.spaces[8]};
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.div`
  width: 32px;
  height: 32px;
  margin-right: ${props => props.theme.spaces[1]};
`;

interface HeaderProps {
  siteTitle: string;
  description: string;
  pageLocation: string;
}

const Header = ({ siteTitle, description, pageLocation }: HeaderProps) => {
  return (
    <Wrapper>
      {pageLocation === '/' ? (
        <ContentBlock
          logo={
            <StyledLink to="/">
              <Logo />
            </StyledLink>
          }
        >
          <HomeH1>{siteTitle}</HomeH1>
          <P>{description}</P>
        </ContentBlock>
      ) : (
        <Navbar>
          <Container>
            <StyledLink to="/">
              <LogoWrap>
                <StyledLogo>
                  <Logo />
                </StyledLogo>
                <H1>{siteTitle}</H1>
              </LogoWrap>
            </StyledLink>
          </Container>
        </Navbar>
      )}
    </Wrapper>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
