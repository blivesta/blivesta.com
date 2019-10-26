import * as React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withScreenshot } from 'zisui';
import pkg from '../package.json';
import GlobalStyle from '../src/styles/GlobalStyle';
import { theme } from '../src/styles/theme';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.(ts|tsx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

addParameters({
  options: {
    name: pkg.name,
  },
});

addDecorator(withScreenshot());

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

configure(loadStories, module);
