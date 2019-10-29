import { keyframes } from 'styled-components';
import { generateMedia } from 'styled-media-query';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const pxToRem = (pxSize: number) => {
  return pxSize / 16;
};

const customMedia = generateMedia({
  sm: '450px',
  md: '768px',
  lg: '1170px',
  xl: '1440px',
});

const theme = {
  colors: {
    baseText: [
      '#fff', // [0]
      '#777', // [1]
      '#ccc', // [2]
    ],
    link: '#fff',
    bg: '#111',
  },
  fontSizes: [
    `${pxToRem(12)}rem`, // [0]
    `${pxToRem(14)}rem`, // [1]
    `${pxToRem(16)}rem`, // [2]
    `${pxToRem(20)}rem`, // [3]
    `${pxToRem(32)}rem`, // [4]
    `${pxToRem(48)}rem`, // [5]
    `${pxToRem(56)}rem`, // [6]
    `${pxToRem(60)}rem`, // [7]
    `${pxToRem(96)}rem`, // [8]
  ],
  fonts: {
    ja:
      "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Hiragino Kaku Gothic ProN, 'ヒラギノ角ゴ ProN W3', Arial, sans-serif",
    en: 'Roboto, sans-serif',
    avantGarde: 'itc-avant-garde-gothic-pro, sans-serif',
  },
  spaces: [
    `${pxToRem(4)}rem`, // [0]
    `${pxToRem(8)}rem`, // [1]
    `${pxToRem(12)}rem`, // [2]
    `${pxToRem(16)}rem`, // [3]
    `${pxToRem(24)}rem`, // [4]
    `${pxToRem(32)}rem`, // [5]
    `${pxToRem(48)}rem`, // [6]
    `${pxToRem(64)}rem`, // [7]
    `${pxToRem(80)}rem`, // [8]
  ],
  media: {
    sm: customMedia.greaterThan('sm'),
    md: customMedia.greaterThan('md'),
    lg: customMedia.greaterThan('lg'),
    xl: customMedia.greaterThan('xl'),
  },
};

export default theme;
