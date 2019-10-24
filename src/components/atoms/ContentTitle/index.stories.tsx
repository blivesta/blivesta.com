import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import ContentTitle from './';

storiesOf(`atoms|ContentTitle`, module).add(`default`, () => <ContentTitle>Title</ContentTitle>);
