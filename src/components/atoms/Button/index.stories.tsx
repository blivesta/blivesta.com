import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Button from '.';

const Wrapper = styled.div`
  padding: 60px;
`;

storiesOf(`atoms|Button`, module).add(`default`, () => (
  <Wrapper>
    <Button type="submit">Button</Button>
  </Wrapper>
));
