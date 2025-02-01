import React, { PropsWithChildren } from 'react'

export default function Heading2({ children } : PropsWithChildren) {
  return (
    <h2 className='text-5xl py-6'>
      { children }
    </h2>
  )
}

