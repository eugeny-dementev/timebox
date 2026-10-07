import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ScrollToTop from './ScrollToTop.tsx';
import Analytics from './Analytics.tsx';
import PageMetadata from './PageMetadata.tsx';
import { basename } from '../options.js';

// Keep scroll effects client-only so static rendering does not run layout effects.
ReactDOM.hydrateRoot(
  document.getElementById('app'),
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <PageMetadata />
      <Analytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
