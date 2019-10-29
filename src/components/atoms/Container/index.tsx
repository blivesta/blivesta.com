import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 984px;
  padding: 0px ${props => props.theme.spaces[5]} ${props => props.theme.spaces[4]};
  padding-top: 0;
`;

export interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => <Wrapper>{children}</Wrapper>;

export default Container;
