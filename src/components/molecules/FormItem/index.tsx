import * as React from 'react';
import styled from 'styled-components';

import P from '../../atoms/P';

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.en};
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-indent: 0.25em;
  margin-bottom: ${({ theme }) => theme.spaces[1]};
`;

const Item = styled.div`
  flex: 1;
  max-width: 100%;
`;

const Required = styled.span`
  padding-left: ${({ theme }) => theme.spaces[0]};
`;

interface FormItemProps {
  title: string;
  htmlFor?: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormItem = ({ title, required, htmlFor, children }: FormItemProps) => (
  <P>
    <Label htmlFor={htmlFor}>
      {title}
      {required && <Required>*</Required>}
    </Label>
    <Item>{children}</Item>
  </P>
);

export default FormItem;
