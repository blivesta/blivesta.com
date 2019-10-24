import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ContentBlock from './';

storiesOf(`molecules|ContentBlock`, module).add(`default`, () => (
  <ContentBlock id="foo" title="foo">
    content
  </ContentBlock>
));
