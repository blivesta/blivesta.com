import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  sm: '450px',
  md: '768px',
  lg: '1170px',
  xl: '1440px',
});

export const sm = customMedia.greaterThan('sm');
export const md = customMedia.greaterThan('md');
export const lg = customMedia.greaterThan('lg');
export const xl = customMedia.greaterThan('xl');
