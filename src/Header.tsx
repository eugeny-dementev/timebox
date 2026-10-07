import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  as?: 'h1' | 'h2',
}

export default function Header({ children, as: Tag = 'h1' }: Props) {
  return (
    <Tag className="text-white font-semibold text-4xl md:text-5xl">
      {children}
    </Tag>
  )
}
