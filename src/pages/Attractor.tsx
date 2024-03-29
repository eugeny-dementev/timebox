import React, { CSSProperties, ReactNode } from 'react'
import css from 'style-to-object';

type Props = {
  pic: string,
  children: ReactNode,
}

export default function Attractor({ pic, children }: Props) {
  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={css("min-height: 75vh") as CSSProperties}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={css(`background-image: url(${pic});`) as CSSProperties}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}