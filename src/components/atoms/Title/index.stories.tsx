import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Title from '.';

const Wrapper = styled.div`
  width: 480px;
  padding: 60px;
`;

storiesOf(`atoms|Title`, module).add(`default`, () => (
  <Wrapper>
    <Title>Title</Title>
  </Wrapper>
));
