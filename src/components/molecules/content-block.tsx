import * as React from 'react';
import styled from 'styled-components';

import { vars } from '../../styles';

import Container from '../atoms/container';

const Flex = styled.div`
  display: flex;
  padding-bottom: 30vh;
`;

const TitleColumn = styled.div`
  width: 80px;
  margin-right: 16px;
  display: flex;
  position: relative;
`;

const H1 = styled.h1`
  display: flex;
  position: absolute;
  top: 0;
  right: 16px;
  white-space: nowrap;
  font-size: 16px;
  transform: rotate(-90deg);
  transform-origin: top right;
  text-transform: uppercase;
  font-family: ${vars.fontFamily.roboto};
  margin: 0;
  letter-spacing: 0.15em;
`;

const MainColumn = styled.div`
  flex: 1;
`;

interface ContentBlockProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const ContentBlock = ({ id, title, children }: ContentBlockProps) => (
  <Container id={id}>
    <Flex>
      <TitleColumn>
        <H1>{title}</H1>
      </TitleColumn>
      <MainColumn>{children}</MainColumn>
    </Flex>
  </Container>
);

export default ContentBlock;
