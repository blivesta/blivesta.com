/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyles from '../../styles/global-styles';
import styled from 'styled-components';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

import Header from '../organisms/header';
import Footer from '../organisms/footer';

const Wrapper = styled.div`
  background-repeat: repeat-x;
  background-image: url(/images/ruler.svg);
  background-size: 50px;
  background-attachment: fixed;
`;

const Contents = styled.div<LayoutProps>`
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 0.8s;
`;

const Loader = styled.div`
  color: #fff;
`;

export interface LayoutProps {
  children: React.ReactNode;
  isActive: boolean;
}

const Layout = ({ children }: LayoutProps) => {
  const path = location.pathname;
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

  const callback = React.useCallback((status: string) => {
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
    <WebfontLoader config={config} onStatus={callback}>
      <Wrapper>
        <GlobalStyles />
        <Contents isActive={state}>
          {state ? (
            <>
              <Header
                siteTitle={data.site.siteMetadata.title}
                path={path}
                description={data.site.siteMetadata.description}
              />
              <main>{children}</main>
              <Footer siteTitle={data.site.siteMetadata.title} />
            </>
          ) : (
            <Loader>loading</Loader>
          )}
        </Contents>
      </Wrapper>
    </WebfontLoader>
  );
};

export default Layout;
