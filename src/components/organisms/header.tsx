import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Container from '../atoms/container';

const Wrapper = styled.header`
  background-repeat: repeat-x;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgNTAgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5ydWxlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJydWxlciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iNSI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktMiIgeD0iMTAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjUiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTQiIHg9IjIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSI1Ij48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS01IiB4PSIzMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iNSI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktNiIgeD0iNDAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjUiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTMiIHg9IjUiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjciPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTciIHg9IjE1IiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSI3Ij48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weS04IiB4PSIyNSIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iNyI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktOSIgeD0iMzUiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjciPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTEwIiB4PSI0NSIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMTAiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
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
