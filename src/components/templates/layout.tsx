/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalStyles from '../../styles/global-styles';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

const Wrapper = styled.div`
  background-repeat: repeat-x;
  background-image: url(/images/ruler.svg);
  background-size: 50px;
  background-attachment: fixed;
`;

const Contents = styled.div``;

const Main = styled.main``;

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GlobalStyles />
      <Contents className="js-content">
        <>
          <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
          <Main>{children}</Main>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </>
      </Contents>
    </Wrapper>
  );
};

export default Layout;
