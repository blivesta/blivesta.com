import * as React from 'react';
import styled from 'styled-components';

import P from '../../atoms/P';

const Label = styled.label`
  font-family: ${props => props.theme.fonts.en};
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-indent: 0.25em;
  margin-bottom: ${props => props.theme.spaces[1]};
`;

const Item = styled.div`
  flex: 1;
  max-width: 100%;
`;

const Required = styled.span`
  padding-left: ${props => props.theme.spaces[0]};
`;

interface InputItemProps {
  title: string;
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}

const InputItem = ({ title, required, htmlFor, children }: InputItemProps) => (
  <P>
    <Label htmlFor={htmlFor}>
      {title}
      {required && <Required>*</Required>}
    </Label>
    <Item>{children}</Item>
  </P>
);

export default InputItem;
