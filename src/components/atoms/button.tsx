import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  margin-right: 8px;
  outline: none;
  appearance: none;
  background-image: none;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  background-color: #000;
  color: #fff;
  font-weight: normal;
  font-size: 14px;
  padding: 0 24px;
  height: 40px;
  border: 1px solid #fff;
  cursor: pointer;
  opacity: 1;
  pointer-events: auto;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

export interface ButtonProps {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  name?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = (props: ButtonProps) => <Wrapper {...props}>{props.children}</Wrapper>;

export default Button;
