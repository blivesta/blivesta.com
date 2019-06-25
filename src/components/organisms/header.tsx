import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Container from '../atoms/container';

const Wrapper = styled.header`
  color: #000;
  background-repeat: repeat-x;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InJ1bGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUwcHgiIGhlaWdodD0iMTBweCIgdmlld0JveD0iLTIwIDIwIDUwIDEwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC0yMCAyMCA1MCAxMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cmVjdCB4PSItMjAiIHk9IjIwIiB3aWR0aD0iMSIgaGVpZ2h0PSI1Ii8+DQoJPHJlY3QgeD0iLTEwIiB5PSIyMCIgd2lkdGg9IjEiIGhlaWdodD0iNSIvPg0KCTxyZWN0IHg9Ii0xNS4wMDMiIHk9IjE5Ljk3OSIgd2lkdGg9IjEuMDA2IiBoZWlnaHQ9IjciLz4NCgk8cmVjdCB4PSItNS4wMDMiIHk9IjE5Ljk3OSIgd2lkdGg9IjEuMDA2IiBoZWlnaHQ9IjciLz4NCgk8cmVjdCB5PSIyMCIgd2lkdGg9IjEiIGhlaWdodD0iNSIvPg0KCTxyZWN0IHg9IjQuOTk3IiB5PSIxOS45NzkiIHdpZHRoPSIxLjAwNiIgaGVpZ2h0PSI3Ii8+DQoJPHJlY3QgeD0iMTAiIHk9IjIwIiB3aWR0aD0iMSIgaGVpZ2h0PSI1Ii8+DQoJPHJlY3QgeD0iMTQuOTk3IiB5PSIxOS45NzkiIHdpZHRoPSIxLjAwNiIgaGVpZ2h0PSI3Ii8+DQoJPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMSIgaGVpZ2h0PSI1Ii8+DQoJPHJlY3QgeD0iMjQuOTk5IiB5PSIxOS45OTUiIHdpZHRoPSIxLjAwMyIgaGVpZ2h0PSI5Ljk5OSIvPg0KPC9nPg0KPC9zdmc+DQo=');
`;

const Name = styled.h1`
  font-family: itc-avant-garde-gothic-pro, sans-serif;
  font-weight: 700;
  font-style: normal;
`;

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <Wrapper>
    <Container>
      <Name>
        <Link to="/">{siteTitle}</Link>
      </Name>
      <p>Yasuyuki Enomoto</p>
      <h2>Design engineering and Content storategy.</h2>
      <nav>
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">OPEN SOUECE PROJECTS</a>
          </li>
          <li>
            <a href="#">CONTACT </a>
          </li>
        </ul>
      </nav>
    </Container>
  </Wrapper>
);

// Header.defaultProps = {
//   siteTitle: ``,
// };

export default Header;
