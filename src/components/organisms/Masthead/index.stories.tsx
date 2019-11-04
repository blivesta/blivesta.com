import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Masthead from '.';

storiesOf(`organisms|Masthead`, module).add(`default`, () => (
  <Masthead siteTitle="blivesta" description="description" />
));
