import * as React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-size: ${props => props.theme.fontSizes[4]};
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;

  ${props => props.theme.media.sm`
    font-size: ${props => props.theme.fontSizes[6]};
  `}
`;

export interface ContentTitleProps {
  children: React.ReactNode;
}

const ContentTitle = (props: ContentTitleProps) => <H2 {...props}>{props.children}</H2>;

export default ContentTitle;
