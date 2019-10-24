import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Footer from './';

storiesOf(`component/organisms/Footer`, module).add(`default`, () => <Footer siteTitle="blivesta" />);
