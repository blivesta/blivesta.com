import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Container from './';

storiesOf(`component/atomos/Container`, module).add(`default`, () => <Container>contents</Container>);
