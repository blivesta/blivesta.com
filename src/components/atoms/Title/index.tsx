import styled from 'styled-components';

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-size: ${props => props.theme.fontSizes[4]};
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;

  ${props => props.theme.media.sm`
    font-size: ${props.theme.fontSizes[6]};
  `}
`;

export default Title;
