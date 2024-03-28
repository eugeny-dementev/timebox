import React from "react";
import { Link } from "react-router-dom";
import { NavProps } from "./navTypes";

export default function DesktopNav({ routes }: NavProps) {
  return (
    <>
      <div className="flex space-x-7">
        <Link key="logo" to="/" className="flex items-center py-4 px-2">
          <span className="font-semibold text-gray-500 text-lg">
            Timebox Planner
          </span>
        </Link>
        {routes.map(({ name, path }) =>
          <Link key={path} to={path} className="flex items-center py-4 px-2">
            <span className="font-semibold text-gray-500 text-lg">
              {name}
            </span>
          </Link>
        )}
      </div>
      <div className="hidden md:flex items-center space-x-3">
        <Link key="/generate" to="/generate" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">
          Generate
        </Link>
      </div>
    </>
  )
}
