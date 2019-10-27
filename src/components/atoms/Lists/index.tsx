import * as React from 'react';
import styled, { css } from 'styled-components';

const Ul = styled.ul<ListsProps>`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  font-family: ${props => props.theme.fonts.en};

  li {
    font-size: ${props => props.theme.fontSizes[1]};
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding-right: ${props => props.theme.spaces[2]};
    margin-bottom: ${props => props.theme.spaces[0]};

    ${props =>
      !props.isNotPipeline
        ? css`
            ${props.theme.media.sm`
              &:not(:last-child)::after {
                display: inline-flex;
                content: '|';
                padding-left: ${props => props.theme.spaces[2]};
                color: ${props => props.theme.colors.baseText[1]};
              }
            `}
          `
        : css`
            letter-spacing: 0;
          `}
  }
`;

interface ListsProps {
  children: React.ReactNode;
  isNotPipeline?: boolean;
}

const Lists = (props: ListsProps) => <Ul {...props}>{props.children}</Ul>;

export default Lists;
