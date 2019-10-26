import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Seo from './';

storiesOf(`parts|Seo`, module).add(`default`, () => <Seo title="title" location="/" />);
