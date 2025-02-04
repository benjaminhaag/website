import React, { PropsWithChildren } from 'react'

type HeadingProps = {
  id?: string
} & PropsWithChildren;

export function Heading1({ id, children } : HeadingProps) {
  return (
    <h1 id={id} className='text-5xl py-6'>
      { children }
    </h1>
  )
}

export function Heading2({ id, children } : HeadingProps) {
  return (
    <h2 id={id} className='text-5xl py-6'>
      { children }
    </h2>
  )
}

export default function Heading3({ children } : PropsWithChildren) {
  return (
    <h2 className='text-2xl py-6'>
      { children }
    </h2>
  )
}

