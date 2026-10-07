import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteType } from './navTypes.ts';
import About from './pages/About.tsx';
import Generate from './pages/Generate.tsx';
import Howto from './pages/Howto.tsx';
import Nav from './Nav.tsx';

const routes: RouteType[] = [
  {
    name: 'About',
    path: '/',
    component: About,
  },
  {
    name: 'Howto',
    path: '/howto',
    component: Howto,
  },
];

const generateRoute: RouteType = {
  name: 'Generate',
  path: '/generate',
  component: Generate,
};

export default function App() {
  return (
    <>
      <Nav mainRoutes={routes} extraRoute={generateRoute} />
      <Routes>
        {routes
          .concat(generateRoute)
          .flatMap(({ path, component: PageComp }) =>
            // GitHub Pages also serves the generated .html files directly.
            [path, path === '/' ? '/index.html' : `${path}.html`].map(pagePath =>
              <Route key={pagePath} path={pagePath} element={<PageComp />} />))}
      </Routes>
    </>
  );
}
