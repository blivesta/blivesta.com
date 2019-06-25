import React from 'react';
import styled from 'styled-components';

import Container from '../atoms/container';

const Wrapper = styled.footer``;

interface FooterProps {
  siteTitle: string;
}

const Footer = ({ siteTitle }: FooterProps) => (
  <Wrapper>
    <Container>
      © {new Date().getFullYear()} {siteTitle}
    </Container>
  </Wrapper>
);

export default Footer;
