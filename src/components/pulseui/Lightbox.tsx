import React from 'react'

export default function Lightbox() {
  return (
    <div className='fixed top-0 left-0 z-50 h-dvh w-dvw bg-black/40 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-background p-6 drop-shadow-xl'>
            <h2 className='text-5xl pt-4 py-8'>Stay Up to Date</h2>
            <p>
              We are constantly improving our services and
            </p>
        </div>
    </div>
  )
}

