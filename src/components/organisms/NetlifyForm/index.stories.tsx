import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import NetlifyForm from '.';

const Fixture = styled.div`
  width: 480px;
  padding: 60px;
`;

storiesOf(`organisms|NetlifyForm`, module).add(`default`, () => (
  <Fixture>
    <NetlifyForm />
  </Fixture>
));
