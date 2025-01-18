import Image from 'next/image'
import React from 'react'
import Background from '@media/background.jpg';
import Box from '@media/box.png';
import Parallax, { Layer } from './pulseui/Parallax';
import { Container } from './pulseui/Container';
import Typed from './pulseui/Typed';

export default function Hero() {
  return (
    <Parallax className='h-dvh'>
      <Layer speed={0.3}>
        <div className='relative h-dvh w-full'>
          <Image alt="Background Image" className='object-cover' src={Background} fill />
        </div>
      </Layer>
      <Layer speed={0.4}>
        <div className='relative h-dvh w-full'>
          <Container className='h-full pt-12 flex items-center justify-end'>
            <Image alt="Background Image" sizes='100vw' className='h-full w-auto' src={Box} />
          </Container>
        {/*<Image alt="Background Image" className='object-contain' src={Box} fill />*/}
        </div>
      </Layer>
      <Layer speed={0.5}>
        <div className='relative h-dvh w-full flex items-center justify-center'>
          <h1 className='text-white'><Typed></Typed></h1>
        </div>
      </Layer>
    </Parallax>
  )
}

