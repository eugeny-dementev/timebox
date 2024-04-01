import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.tsx';
import { basename } from '../options.js';

export default function SSRender(url: string | Partial<Location>) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url} basename={basename}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
