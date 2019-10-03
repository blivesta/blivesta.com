/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyles from '../../styles/global-styles';
import styled, { css, keyframes } from 'styled-components';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background-repeat: repeat-x;
  background-image: url(/images/ruler.svg);
  background-size: 50px;
  background-attachment: fixed;
`;

const Contents = styled.div`
  ${(props: { isActive: boolean }) =>
    props.isActive &&
    css`
      animation: ${fadeIn} 1s linear;
    `}
`;

const Main = styled.main``;

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [state, setState] = React.useState(false);

  const config = {
    google: {
      families: [`Roboto`],
    },
    typekit: {
      id: process.env.GATSBY_TYPE_KIT_ID,
      families: [`ITC Avant Garde Gothic Pro Bold`, `vinyl`],
    },
  };

  const fontCallback = React.useCallback((status: string) => {
    return status === 'active' ? setState(true) : null;
  }, []);

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
    <WebfontLoader config={config} onStatus={fontCallback}>
      <Wrapper>
        <GlobalStyles />
        {state ? (
          <Contents isActive={state}>
            <>
              <Header siteTitle={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
              <Main>{children}</Main>
              <Footer siteTitle={data.site.siteMetadata.title} />
            </>
          </Contents>
        ) : null}
      </Wrapper>
    </WebfontLoader>
  );
};

export default Layout;
