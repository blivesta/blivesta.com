import * as React from 'react';
import styled, { css } from 'styled-components';

import { media, vars } from '../../styles';

const Ul = styled.ul<ListsProps>`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  font-family: ${vars.fontFamily.roboto};

  li {
    padding-right: 12px;
    letter-spacing: 0.15em;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 4px;

    ${props =>
      !props.isNotPipeline
        ? css`
            ${media.sm`
              &:not(:last-child)::after {
                display: inline-flex;
                content: '|';
                padding-left: 12px;
                color: #777;
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
