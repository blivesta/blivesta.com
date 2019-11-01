import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import SubTitle from '.';

const Wrapper = styled.div`
  width: 480px;
  padding: 60px;
`;

storiesOf(`atoms|SubTitle`, module).add(`default`, () => (
  <Wrapper>
    <SubTitle>SubTitle</SubTitle>
  </Wrapper>
));
