import React, { Ref, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import DesktopNav from './DesktopNav.tsx';
import { RouteType } from './navTypes.ts';
import About from './pages/About.tsx';
import Generate from './pages/Generate.tsx';
import Howto from './pages/Howto.tsx';
import MobileNav from './MobileNav.tsx';
import MobileMenuButton from './MobileMenuButton.tsx';

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
  const mobileMenuRef: Ref<HTMLDivElement> = useRef(null);

  return (
    <>
      <nav className="bg-gray-900 shadow">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <DesktopNav routes={routes} />

            <MobileMenuButton onClick={() => {
              mobileMenuRef.current?.classList.toggle('hidden');
            }} />

          </div>
        </div>
        <MobileNav
          mmref={mobileMenuRef}
          hideMenu={() => {
            mobileMenuRef.current?.classList.add('hidden');
          }}
          routes={routes.concat(generateRoute)} />
      </nav >
      <Routes>
        {routes
          .concat(generateRoute)
          .map(({ path, component: PageComp }) =>
            <Route key={path} path={path} element={<PageComp />} />)}
      </Routes>
    </>
  );
}
