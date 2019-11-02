import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '.';

storiesOf(`organisms|Header`, module)
  .add(`default`, () => <Header siteTitle="blivesta" pageLocation="/" />)
  .add(`home`, () => <Header siteTitle="blivesta" pageLocation="/about/" />);
