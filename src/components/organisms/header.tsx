import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';

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
      <P>Yasuyuki Enomoto / Design engineer.</P>
    </ContentBlock>
  </Wrapper>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
