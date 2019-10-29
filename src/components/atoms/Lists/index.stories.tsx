import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Lists from '.';

storiesOf(`atoms|Lists`, module)
  .add(`default`, () => (
    <Lists
      items={[
        {
          title: 'foo',
          linkUrl: 'https://blivesta.com',
        },
        {
          title: 'bar',
        },
        {
          title: 'baz',
        },
      ]}
    />
  ))
  .add(`isNotPipeline`, () => (
    <Lists
      isNotPipeline
      items={[
        {
          title: 'foo',
          linkUrl: 'https://blivesta.com',
        },
        {
          title: 'bar',
        },
        {
          title: 'baz',
        },
      ]}
    />
  ));
