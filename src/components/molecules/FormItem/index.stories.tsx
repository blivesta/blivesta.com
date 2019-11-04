import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Input from '../../atoms/Input';
import FormItem from '.';

const Wrapper = styled.div`
  width: 480px;
  padding: 60px;
`;

storiesOf(`molecules|FormItem`, module)
  .add(`default`, () => (
    <Wrapper>
      <FormItem title="foo" htmlFor="foo">
        <Input id="foo" placeholder="foo" />
      </FormItem>
    </Wrapper>
  ))
  .add(`required`, () => (
    <Wrapper>
      <FormItem title="bar" htmlFor="bar" required>
        <Input id="bar" aria-required required />
      </FormItem>
    </Wrapper>
  ));
