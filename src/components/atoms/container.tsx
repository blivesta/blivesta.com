import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 2rem 1.5rem;
  padding-top: 0;
`;

export interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => <Wrapper {...props}>{props.children}</Wrapper>;

export default Container;
