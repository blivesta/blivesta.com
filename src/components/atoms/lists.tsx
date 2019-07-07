import * as React from 'react';
import styled, { css } from 'styled-components';

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-top: 0;

  li {
    margin-right: 12px;
    letter-spacing: 0.15em;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 4px;

    ${(props: ListsProps) =>
      !props.isNotPipeline
        ? css`
            &:not(:last-child)::after {
              display: inline-flex;
              content: '|';
              margin-left: 12px;
            }
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
