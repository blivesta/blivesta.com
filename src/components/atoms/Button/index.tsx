import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  background-image: none;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  background-color: transparent;
  color: ${props => props.theme.colors.baseText[0]};
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes[1]};
  padding: 0 ${props => props.theme.spaces[4]};
  height: 40px;
  border: 2px solid ${props => props.theme.colors.baseText[0]};
  cursor: pointer;
  opacity: 1;
  pointer-events: auto;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5em;
  text-indent: 0.5em;
  transition: background-color, color 0.2s;

  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.baseText[0]};
    color: ${props => props.theme.colors.bg};
  }
`;

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  name?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ children, type, name, disabled, onClick }: ButtonProps) => (
  <StyledButton type={type} name={name} disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
