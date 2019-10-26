import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ContentBlock from './';

const Fixtuer = styled.div`
  background-color: #444;
`;

storiesOf(`molecules|ContentBlock`, module).add(`default`, () => (
  <ContentBlock id="foo" title="foo">
    <Fixtuer>contents</Fixtuer>
  </ContentBlock>
));
