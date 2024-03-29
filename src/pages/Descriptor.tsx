import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

export default function Descriptor(props: Props) {
  return (
    <p className="mt-4 text-lg text-blueGray-200">
      {props.children}
    </p>
  )
}
