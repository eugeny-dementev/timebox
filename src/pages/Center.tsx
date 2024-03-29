import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

export default function Center(props: Props) {
  return (
    <div className="flex justify-center mt-8">
      {props.children}
    </div>
  )
}
