import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from '../../atoms/Logo';
import ContentBlock from '../../molecules/ContentBlock';

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes[7]};
  margin-top: -8px;
  margin-bottom: ${props => props.theme.spaces[1]};
  line-height: 1;
  letter-spacing: -0.025em;
  text-indent: -0.025em;

  ${props => props.theme.media.sm`
    font-size: ${props.theme.fontSizes[8]};
  `};
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

interface MastheadProps {
  siteTitle: string;
  description: string;
}

const Masthead = ({ siteTitle, description }: MastheadProps) => {
  return (
    <ContentBlock
      logo={
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      }
    >
      <H1>{siteTitle}</H1>
      <P>{description}</P>
    </ContentBlock>
  );
};

export default Masthead;
