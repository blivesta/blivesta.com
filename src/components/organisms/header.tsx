import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { media, vars } from '../../styles';
import ContentBlock from '../molecules/content-block';
import Logo from '../../assets/inline-svg/logo.svg';

const Wrapper = styled.header``;

const H1 = styled.h1`
  font-family: ${vars.fontFamily.avantGarde};
  font-weight: 700;
  font-size: 60px;
  margin-top: -8px;
  margin-bottom: 8px;
  line-height: 1;

  ${media.sm`
    font-size: 96px;
  `}
`;

const P = styled.p`
  font-family: ${vars.fontFamily.roboto};
  margin-bottom: 0;
  font-size: 14px;
  color: #ccc;

  ${media.sm`
    font-size: 20px;
  `}
`;

interface HeaderProps {
  siteTitle: string;
  description: string;
}

const Header = ({ siteTitle, description }: HeaderProps) => {
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
        <P>{description}</P>
      </ContentBlock>
    </Wrapper>
  );
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
