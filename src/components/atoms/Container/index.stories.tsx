import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Container from '.';

const Fixture = styled.div`
  background-color: #444;
`;

storiesOf(`atoms|Container`, module).add(`default`, () => (
  <Container>
    <Fixture>contents</Fixture>
  </Container>
));
