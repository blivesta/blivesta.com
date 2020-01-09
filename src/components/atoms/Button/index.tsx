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
  background-color: ${({ theme }) => theme.colors.button.bg};
  color: ${({ theme }) => theme.colors.baseText[0]};
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  padding: 0 ${({ theme }) => theme.spaces[4]};
  height: ${({ theme }) => theme.control.height};
  border: 2px solid ${({ theme }) => theme.colors.button.border};
  cursor: pointer;
  opacity: 1;
  pointer-events: auto;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5em;
  text-indent: 0.5em;
  transition: background-color ${({ theme }) => theme.transition};

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.button.hover.bg};
  }

  &:focus {
    transition: box-shadow 0.2s ease-out;
    box-shadow: 0 0 4px 4px ${({ theme }) => theme.colors.button.forcus.shadow};
  }
`;

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  name?: string;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ children, type, name, disabled, onClick, ariaLabel }: ButtonProps) => (
  <StyledButton type={type} name={name} disabled={disabled} onClick={onClick} aria-label={ariaLabel}>
    {children}
  </StyledButton>
);

export default Button;
