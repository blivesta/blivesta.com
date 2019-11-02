import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Textarea from '.';

const Wrapper = styled.div`
  width: 480px;
  padding: 60px;
`;

storiesOf(`atoms|Textarea`, module).add(`default`, () => (
  <Wrapper>
    <Textarea placeholder="placeholder" />
  </Wrapper>
));
