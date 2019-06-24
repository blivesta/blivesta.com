import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #000;
  margin-bottom: 1.45rem;
`;
interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
