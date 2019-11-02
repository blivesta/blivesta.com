import styled from 'styled-components';

const SubTitle = styled.h3`
  font-family: ${props => props.theme.fonts.avantGarde};
  font-size: ${props => props.theme.fontSizes[3]};
  text-transform: uppercase;
  line-height: 1;
  margin-top: 0;
  letter-spacing: 0.15em;
  text-indent: 0.15em;
`;

export default SubTitle;
