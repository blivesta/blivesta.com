import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Footer from '.';

storiesOf(`organisms|Footer`, module).add(`default`, () => <Footer siteTitle="blivesta" pageLocation="/" />);
