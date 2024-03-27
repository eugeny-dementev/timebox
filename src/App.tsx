import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.tsx';
import About from './pages/About.tsx';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
];

export default function App() {
  return (
    <>
      <nav>
        <ul>
          {routes.map(({ name, path }) => {
            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, component: PageComp }) => <Route key={path} path={path} element={<PageComp />} />)}
      </Routes>
    </>
  );
}
