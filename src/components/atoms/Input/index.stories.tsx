import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Input from '.';

const Wrapper = styled.div`
  width: 480px;
  padding: 60px;
`;

storiesOf(`atoms|Input`, module).add(`default`, () => (
  <Wrapper>
    <Input type="text" placeholder="placeholder" />
  </Wrapper>
));
