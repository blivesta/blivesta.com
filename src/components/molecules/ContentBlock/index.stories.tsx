import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ContentBlock from '.';

const Fixture = styled.div`
  background-color: #444;
`;

storiesOf(`molecules|ContentBlock`, module).add(`default`, () => (
  <ContentBlock id="foo" title="foo">
    <Fixture>contents</Fixture>
  </ContentBlock>
));
