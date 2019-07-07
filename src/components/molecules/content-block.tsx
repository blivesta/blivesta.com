import * as React from 'react';
import styled, { css } from 'styled-components';

import { vars } from '../../styles';

import Container from '../atoms/container';

const Flex = styled.div`
  display: flex;
  padding-bottom: 30vh;

  ${(props: ContentBlockProps) =>
    props.logo &&
    css`
      padding-top: 30vh;
    `}
`;

const TitleColumn = styled.div`
  width: 80px;
  margin-right: 16px;
  position: relative;
`;

const H1 = styled.h1`
  display: flex;
  position: absolute;
  top: 0;
  right: 20px;
  white-space: nowrap;
  font-size: 1rem;
  transform: rotate(-90deg);
  transform-origin: top right;
  text-transform: uppercase;
  font-family: ${vars.fontFamily.roboto};
  margin: 0;
  letter-spacing: 0.15em;
  color: #555;
`;

const MainColumn = styled.div`
  flex: 1;
`;

interface ContentBlockProps {
  id?: string;
  title?: string;
  logo?: React.ReactNode;
  children: React.ReactNode;
}

const ContentBlock = (props: ContentBlockProps) => (
  <Container {...props}>
    <Flex logo={props.logo}>
      <TitleColumn>{props.logo ? props.logo : <H1>{props.title}</H1>}</TitleColumn>
      <MainColumn>{props.children}</MainColumn>
    </Flex>
  </Container>
);

ContentBlock.defaultProps = {
  isHeader: false,
};

export default ContentBlock;
