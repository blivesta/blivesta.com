import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Layout from './';

storiesOf(`templates|Layout`, module).add(`default`, () => <Layout>contents</Layout>);
