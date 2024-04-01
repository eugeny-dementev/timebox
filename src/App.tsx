import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

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
          .map(({ path, component: PageComp }) =>
            <Route key={path} path={path} element={<PageComp />} />)}
      </Routes>
    </>
  );
}
