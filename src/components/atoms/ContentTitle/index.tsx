import * as React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-size: ${props => props.theme.fontSizes[4]};
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;

  ${props => props.theme.media.sm`
    font-size: ${props.theme.fontSizes[6]};
  `}
`;

export interface ContentTitleProps {
  children: React.ReactNode;
}

const ContentTitle = ({ children }: ContentTitleProps) => <H2>{children}</H2>;

export default ContentTitle;
