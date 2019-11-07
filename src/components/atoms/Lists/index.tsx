import * as React from 'react';
import styled, { css } from 'styled-components';

const Ul = styled.ul<ListsProps>`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  font-family: ${({ theme }) => theme.fonts.en};

  ${props =>
    props.isNotPipeline &&
    css`
      flex-wrap: wrap;
      flex-direction: column;
      position: relative;
      margin-bottom: ${props.theme.spaces[6]};

      ${props.theme.media.md`
        flex-direction: row;
      `}
    `}
`;

const Li = styled.li<ListProps>`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding-right: ${({ theme }) => theme.spaces[2]};
  margin-bottom: ${({ theme }) => theme.spaces[0]};

  ${props =>
    props.isNotPipeline
      ? css`
        letter-spacing: 0;
        width: 100%;

        ${props.theme.media.sm`
          width: 100%;
        `}
        ${props.theme.media.md`
          width: 50%;
        `}
        ${props.theme.media.lg`
          width: 33.333333%;
        `}
      `
      : css`
          font-size: ${props.theme.fontSizes[0]};
          padding-right: ${props.theme.spaces[1]};

          &:last-child {
            padding-right: 0;
          }

          ${props.theme.media.sm`
          &:not(:last-child)::after {
            display: inline-flex;
            content: '|';
            padding-left: ${props.theme.spaces[2]};
            color: ${props.theme.colors.baseText[1]};
          }
        `}

          ${props.theme.media.sm`
          font-size: ${props.theme.fontSizes[1]};
          padding-right: ${props.theme.spaces[2]};
        `}
        `}
`;

const A = styled.a``;
interface ListsProps {
  isNotPipeline?: boolean;
  items: ListsItemProps[];
}

interface ListsItemProps {
  title: string | React.ReactNode;
  linkUrl?: string;
}

interface ListProps {
  isNotPipeline?: ListsProps['isNotPipeline'];
}

const Lists = (props: ListsProps) => {
  const { isNotPipeline, items } = props;
  return (
    <Ul isNotPipeline={isNotPipeline} items={items}>
      {items.map((item, i) => (
        <Li key={i.toString()} isNotPipeline={isNotPipeline}>
          {item.linkUrl ? (
            <A href={item.linkUrl} rel="noopener noreferrer" target="_blank">
              {item.title}
            </A>
          ) : (
            item.title
          )}
        </Li>
      ))}
    </Ul>
  );
};

export default Lists;
