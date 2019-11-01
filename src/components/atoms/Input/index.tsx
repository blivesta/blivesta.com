import styled, { css } from 'styled-components';

export const inputStyle = css`
  width: 100%;
  font-size: ${props => props.theme.fontSizes[2]};
  color: ${props => props.theme.colors.baseText[0]};
  background: transparent;
  outline: none;
  box-shadow: none;
  padding: 0 ${props => props.theme.spaces[1]};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${props => props.theme.colors.baseText[1]};
  transition: background, border-bottom 0.2s;

  &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.baseText[0]};
    background: rgba(61, 16, 107, 0.15);
  }
`;

const Input = styled.input`
  ${inputStyle}

  height: 40px;
`;

export default Input;
