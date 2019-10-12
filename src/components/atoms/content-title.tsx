import * as React from 'react';
import styled from 'styled-components';
import { media, vars } from '../../styles';

const H2 = styled.h2`
  font-family: ${vars.fontFamily.avantGarde};
  text-transform: uppercase;
  font-size: 32px;
  margin-top: 0;
  line-height: 1;

  ${media.sm`
    font-size: 56px;
  `}
`;

export interface ContentTitleProps {
  children: React.ReactNode;
}

const ContentTitle = (props: ContentTitleProps) => <H2 {...props}>{props.children}</H2>;

export default ContentTitle;
