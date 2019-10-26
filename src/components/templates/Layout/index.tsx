import * as React from 'react';
import styled from 'styled-components';

import { useSiteMetadata } from '../../../hooks/useSiteMetadata';
import GlobalStyle from '../../../styles/GlobalStyle';
import { theme } from '../../../styles';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const Wrapper = styled.div`
  background-repeat: repeat-x;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDF2NUgwek0xMCAwaDF2NWgtMXpNMjAgMGgxdjVoLTF6TTMwIDBoMXY1aC0xek00MCAwaDF2NWgtMXpNNSAwaDF2N0g1ek0xNSAwaDF2N2gtMXpNMjUgMGgxdjdoLTF6TTM1IDBoMXY3aC0xek00NSAwaDF2MTBoLTF6Ii8+PC9nPjwvc3ZnPg==');
  background-size: 50px;
  background-attachment: fixed;
`;

const Contents = styled.div``;

const Main = styled.main``;

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();

  return (
    <Wrapper>
      <GlobalStyle />
      <Contents className="js-content">
        <>
          <Header siteTitle={title} description={description} />
          <Main>{children}</Main>
          <Footer siteTitle={title} />
        </>
      </Contents>
    </Wrapper>
  );
};

export default Layout;
