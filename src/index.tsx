import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import type {} from '@mui/material/themeCssVarsAugmentation';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Blog from 'blog/Blog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Blog />
  </ThemeProvider>,
);