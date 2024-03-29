import React, { Ref, useRef } from 'react';
import DesktopNav from './DesktopNav';
import MobileMenuButton from './MobileMenuButton';
import MobileNav from './MobileNav';
import { RouteType } from './navTypes';

type Props = {
  mainRoutes: RouteType[],
  extraRoute: RouteType,
}

export default function Nav({ mainRoutes, extraRoute }: Props) {
  const mobileMenuRef: Ref<HTMLDivElement> = useRef(null);

  return (
    <nav className="bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <DesktopNav routes={mainRoutes} />

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
        routes={mainRoutes.concat(extraRoute)} />
    </nav >
  )
}
