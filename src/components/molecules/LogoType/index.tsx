import * as React from 'react';
import styled from 'styled-components';

import Logo from '../../atoms/Logo';

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: ${props => props.theme.spaces[1]};
`;

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes[3]};
  margin-bottom: 0;
  line-height: 1;
`;

interface LogoTypeProps {
  siteTitle: string;
}

const LogoType = ({ siteTitle }: LogoTypeProps) => (
  <Flex>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <H1>{siteTitle}</H1>
  </Flex>
);

export default LogoType;
