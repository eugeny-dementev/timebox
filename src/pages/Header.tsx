import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

export default function Header(props: Props) {
  return (
    <h1 className="text-white font-semibold text-5xl">
      {props.children}
    </h1>
  )
}
