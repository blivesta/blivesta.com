import { css, keyframes } from 'styled-components';
import { generateMedia } from 'styled-media-query';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const customMedia = generateMedia({
  sm: '450px',
  md: '768px',
  lg: '1200px',
});

// export const fontAvantGarde = css`
//   font-family: itc-avant-garde-gothic-pro, sans-serif;
// `;

// export const fontRoboto = css`
//   font-family: Roboto, sans-serif;
// `;

// export const fontJa = {
//   sans:
//     "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Hiragino Kaku Gothic ProN, 'ヒラギノ角ゴ ProN W3', Arial, 'メイリオ', Meiryo, sans-serif",
//   serif: 'serif',
// };

export const vpSm = css`
  min-width: 640px;
`;
