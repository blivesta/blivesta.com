import * as React from 'react';
import styled, { css } from 'styled-components';

const en = css`
  font-family: ${props => props.theme.fonts.en};
  font-size: ${props => props.theme.fontSizes[2]};
`;

const ja = css`
  font-family: ${props => props.theme.fonts.ja};
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: 1.7;
`;

const StyledP = styled.p<PProps>`
  margin-top: 0;
  margin-bottom: ${props => props.theme.spaces[3]};

  ${props => (props.lang === 'en' ? en : ja)}
  ${props =>
    props.justify &&
    css`
      text-align: justify;
    `}

  ${props =>
    props.last &&
    css`
      margin-bottom: ${props.theme.spaces[6]};
    `}
`;

export interface PProps {
  children: React.ReactNode;
  lang?: 'en' | 'ja';
  justify?: boolean;
  last?: boolean;
}

const P = ({ children, lang, justify, last }: PProps) => (
  <StyledP lang={lang} justify={justify} last={last}>
    {children}
  </StyledP>
);

export default P;
