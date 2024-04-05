import React from "react";

export type MobileMenuProps = {
  onClick: () => void,
}

export default function MobileMenuButton(props: MobileMenuProps) {
  return (
    <div className="md:hidden flex items-center">
      <button onClick={props.onClick} className="outline-none mobile-menu-button">
        <svg
          className="w-6 h-6 text-gray-300 hover:text-green-400"
          x-show="!showMenu"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  )
}
