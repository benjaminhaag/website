import Image from 'next/image'
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import box from '@media/box.png'
import { AspectRatio } from './ui/aspect-ratio'
import Background from '@media/background.jpg';
import Parallax, { Layer } from './pulseui/Parallax';

export default function Hero() {
  return (
    <Parallax>
      <Layer speed={0.3}>
        <div className='relative h-dvh w-full'>
          <Image alt="Background Image" className='object-cover' src={Background} fill />
        </div>
      </Layer>
      <Layer speed={0.5}>
        <div className='relative h-dvh w-full flex items-center justify-center'>
          <h1 className='text-white'>Hello World</h1>
        </div>
      </Layer>
    </Parallax>
  )
}

