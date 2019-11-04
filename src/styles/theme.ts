import chroma from 'chroma-js';
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

export const vars = {
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
  control: {
    height: `${pxToRem(40)}rem`,
  },
  transition: '0.4s ease-out',
};

export const mainColor = '#120824';

export const darkTheme = {
  ...vars,
  colors: {
    baseText: [
      '#fff', // [0]
      chroma('#fff')
        .alpha(0.4)
        .hex(), // [1]
      chroma('#fff')
        .alpha(0.8)
        .hex(), // [2]
    ],
    link: '#fff',
    bg: mainColor,
    logo: mainColor,
    input: {
      bg: 'transparent',
      border: '#777',
      forcus: {
        bg: chroma(mainColor)
          .brighten(2)
          .alpha(0.1)
          .hex(),
        border: '#fff',
      },
    },
    button: {
      bg: 'transparent',
      border: '#fff',
      forcus: {
        bg: chroma(mainColor)
          .brighten(2)
          .alpha(0.2)
          .hex(),
        border: '#fff',
      },
    },
  },
};

export const lightTheme = {
  ...vars,
  colors: {
    baseText: [
      mainColor, // [0]
      chroma(mainColor)
        .alpha(0.4)
        .hex(), // [1]
      chroma(mainColor)
        .alpha(0.8)
        .hex(), // [2]
    ],
    link: mainColor,
    bg: '#fff',
    logo: mainColor,
    input: {
      bg: 'transparent',
      border: '#777',
      forcus: {
        bg: chroma(mainColor)
          .brighten(2)
          .alpha(0.05)
          .hex(),
        border: mainColor,
      },
    },
    button: {
      bg: 'transparent',
      border: mainColor,
      forcus: {
        bg: chroma(mainColor)
          .brighten(2)
          .alpha(0.2)
          .hex(),
        border: mainColor,
      },
    },
  },
};
