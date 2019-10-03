import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';

import { vars } from '../../styles';

import ContentBlock from '../molecules/content-block';

import Logo from '../../assets/inline-svg/logo.svg';

const Wrapper = styled.header``;

const H1 = styled.h1`
  font-family: ${vars.fontFamily.avantGarde};
  font-weight: 700;
  font-size: 56px;
  margin-top: -8px;
  margin-bottom: 8px;
  line-height: 1;

  ${media.greaterThan('small')`
    font-size: 96px;
  `}
`;

const P = styled.p`
  font-family: ${vars.fontFamily.roboto};
  margin-bottom: 0;
  font-size: 20px;
`;

const Nav = styled.nav`
  padding-top: 32px;
`;

interface HeaderProps {
  siteTitle: string;
  path: string;
  description: string;
}

const Header = ({ siteTitle, path, description }: HeaderProps) => {
  return (
    <Wrapper>
      <ContentBlock
        logo={
          <Link to="/">
            <Logo />
          </Link>
        }
      >
        <H1>{siteTitle}</H1>
        {path === '/' && <P>{description}</P>}
      </ContentBlock>
    </Wrapper>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
