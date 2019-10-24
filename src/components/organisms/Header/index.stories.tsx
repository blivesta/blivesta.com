import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Header from './';

storiesOf(`component/organisms/Header`, module).add(`default`, () => (
  <Header siteTitle="blivesta" description="description😀 😎 👍 💯" />
));
