import styled from 'styled-components';

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.avantGarde};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;

  ${({ theme }) => theme.media.sm`
    font-size: ${theme.fontSizes[6]};
  `}
`;

export default Title;
