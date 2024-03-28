import React, { Ref } from 'react';
import { Link } from 'react-router-dom';
import { NavProps } from "./navTypes";

export type MMNavProps = NavProps & {
  hideMenu: () => void,
  mmref: Ref<HTMLDivElement>,
}

function getClassList (highlight = false) {
  let classList = "block text-sm px-2 py-4 text-gray-300 hover:bg-green-500 ";

  classList += highlight ? 'bg-gray-700' : 'transition duration-300';

  return classList;
}

export default function MobileNav({ mmref, hideMenu, routes }: MMNavProps) {
  return (
    <div ref={mmref} className="hidden mobile-menu">
      <ul className="">
        {routes.map(({ name, path }) => {
          return <li key={path}>
            <Link
              onClick={hideMenu}
              to={path}
              className={getClassList(path === '/generate')}
            >{name}</Link>
          </li>
        })}
      </ul>
    </div >
  )
}
