import * as React from 'react';
import styled from 'styled-components';

import Logo from '../../atoms/Logo';
import ContentBlock from '../../molecules/ContentBlock';

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.avantGarde};
  font-size: ${({ theme }) => theme.fontSizes[7]};
  font-weight: 700;
  margin-top: -8px;
  margin-bottom: ${({ theme }) => theme.spaces[1]};
  line-height: 1;
  letter-spacing: -0.025em;
  text-indent: -0.025em;

  ${({ theme }) => theme.media.sm`
    font-size: ${theme.fontSizes[8]};
  `};
`;

const P = styled.p`
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.baseText[2]};
  margin-bottom: 0;

  ${({ theme }) => theme.media.sm`
    font-size: ${theme.fontSizes[3]};
  `}
`;

interface MastheadProps {
  siteTitle: string;
  description: string;
}

const Masthead = ({ siteTitle, description }: MastheadProps) => {
  return (
    <ContentBlock logo={<Logo />}>
      <H1>{siteTitle}</H1>
      <P>{description}</P>
    </ContentBlock>
  );
};

export default Masthead;
