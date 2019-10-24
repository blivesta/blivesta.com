import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Lists from './';

storiesOf(`atoms|Lists`, module)
  .add(`default`, () => (
    <Lists>
      <li>foo</li>
      <li>bar</li>
      <li>baz</li>
    </Lists>
  ))
  .add(`isNotPipeline`, () => (
    <Lists isNotPipeline>
      <li>foo</li>
      <li>bar</li>
      <li>baz</li>
    </Lists>
  ));
