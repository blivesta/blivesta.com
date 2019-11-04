import 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';

type Theme = typeof darkTheme | lightTheme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
