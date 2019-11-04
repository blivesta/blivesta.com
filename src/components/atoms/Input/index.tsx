import styled, { css } from 'styled-components';

export const inputStyle = css`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spaces[1]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.baseText[0]};
  background-color: ${({ theme }) => theme.colors.input.bg};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.input.border};
  outline: none;
  box-shadow: none;
  transition: background, border-bottom ${({ theme }) => theme.transition};

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.input.forcus.border};
    background-color: ${({ theme }) => theme.colors.input.forcus.bg};
  }
`;

const Input = styled.input`
  ${inputStyle}

  height: ${({ theme }) => theme.control.height};
`;

export default Input;
