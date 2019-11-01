import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Input from '../../atoms/Input';
import InputItem from '.';

const Wrapper = styled.div`
  width: 480px;
  padding: 60px;
`;

storiesOf(`molecules|InputItem`, module)
  .add(`default`, () => (
    <Wrapper>
      <InputItem title="foo" htmlFor="foo">
        <Input id="foo" placeholder="foo" />
      </InputItem>
    </Wrapper>
  ))
  .add(`required`, () => (
    <Wrapper>
      <InputItem title="bar" htmlFor="bar" required>
        <Input id="bar" aria-required required />
      </InputItem>
    </Wrapper>
  ));
