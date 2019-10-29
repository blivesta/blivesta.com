import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from '../../atoms/Logo';
import ContentBlock from '../../molecules/ContentBlock';

const Wrapper = styled.header``;

const H1 = styled.h1`
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

const P = styled.p`
  font-family: ${props => props.theme.fonts.en};
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props => props.theme.colors.baseText[2]};
  margin-bottom: 0;

  ${props => props.theme.media.sm`
    font-size: ${props.theme.fontSizes[3]};
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
