import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 984px;
  padding: 0px ${props => props.theme.spaces[5]};
  padding-top: 0;
`;

export default Container;
