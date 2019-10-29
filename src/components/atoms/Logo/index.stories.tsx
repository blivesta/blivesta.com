import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Logo from '.';

const Wrapper = styled.div`
  width: 480px;
`;

storiesOf(`atoms|Logo`, module).add(`default`, () => (
  <Wrapper>
    <Logo />
  </Wrapper>
));
