import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import useSiteMetadata from '../../../hooks/useSiteMetadata';
import GlobalStyle from '../../../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../../../styles/theme';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const Wrapper = styled.div<LayoutProps>`
  background-repeat: repeat-x;
  background-size: 50px;
  background-attachment: fixed;
  background-image: ${({ themeState }) =>
    themeState === 'light'
      ? `url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzEyMDgyNCI+PHBhdGggZD0iTTAgMGgxdjVIMHpNMTAgMGgxdjVoLTF6TTIwIDBoMXY1aC0xek0zMCAwaDF2NWgtMXpNNDAgMGgxdjVoLTF6TTUgMGgxdjdINXpNMTUgMGgxdjdoLTF6TTI1IDBoMXY3aC0xek0zNSAwaDF2N2gtMXpNNDUgMGgxdjEwaC0xeiIvPjwvZz48L3N2Zz4=')`
      : `url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDF2NUgwek0xMCAwaDF2NWgtMXpNMjAgMGgxdjVoLTF6TTMwIDBoMXY1aC0xek00MCAwaDF2NWgtMXpNNSAwaDF2N0g1ek0xNSAwaDF2N2gtMXpNMjUgMGgxdjdoLTF6TTM1IDBoMXY3aC0xek00NSAwaDF2MTBoLTF6Ii8+PC9nPjwvc3ZnPg==')`};
`;

const Contents = styled.div``;

const Main = styled.main``;

export interface LayoutProps {
  themeState: string | null;
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { title } = useSiteMetadata();
  const [path, setPath] = React.useState('');
  const [theme, setTheme] = React.useState<string | null>('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
    setTheme(localStorage.getItem('theme'));
  }, [path, theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Wrapper themeState={theme}>
        <GlobalStyle />
        <Contents className="js-content">
          <Header siteTitle={title} pageLocation={path} themeSwich={toggleTheme} themeState={theme} />
          <Main>{children}</Main>
          <Footer siteTitle={title} pageLocation={path} />
        </Contents>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
