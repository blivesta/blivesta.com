import * as React from 'react';
import styled, { css } from 'styled-components';

import Container from '../../atoms/Container';

const Wrapper = styled.section``;

const Flex = styled.div<ContentBlockProps>`
  display: flex;
  padding-bottom: 20vh;
  ${({ logo }) =>
    logo &&
    css`
      padding-top: 10vh;
      padding-bottom: 30vh;

      ${({ theme }) => theme.media.sm`
          padding-top: 15vh;
      `}
    `}

  ${({ theme }) => theme.media.sm`
    padding-right: ${theme.spaces[8]};
  `}
`;

const TitleColumn = styled.div`
  width: 44px;
  margin-right: ${({ theme }) => theme.spaces[3]};
  position: relative;

  ${({ theme }) => theme.media.sm`
    width: 80px;
  `}
`;

const H1 = styled.h1`
  display: flex;
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.spaces[4]};
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.en};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.baseText[1]};
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 0.15em;
  transform: rotate(-90deg);
  transform-origin: top right;

  ${({ theme }) => theme.media.sm`
    font-size: ${theme.fontSizes[2]};
  `}
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

const ContentBlock = ({ id, title, logo, children }: ContentBlockProps) => (
  <Wrapper id={id}>
    <Container>
      <Flex logo={logo}>
        <TitleColumn>{logo || <H1>{title}</H1>}</TitleColumn>
        <MainColumn>{children}</MainColumn>
      </Flex>
    </Container>
  </Wrapper>
);

export default ContentBlock;
