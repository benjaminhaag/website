import Image from 'next/image'
import React from 'react'
import Background from '@media/background.png';
import Box from '@media/box.png';
import Parallax, { Layer } from './pulseui/Parallax';
import { Container } from './pulseui/Container';
import Typed from './pulseui/Typed';
import { Button } from './ui/button';
import NextLink from 'next/link';

export default function Hero() {
  return (
    <Parallax className='h-dvh'>
      <Layer speed={0.1}>
        <div className='relative h-dvh w-full'>
        <Image alt="Background Image" className='object-cover' src={Background} fill />
        </div>
      </Layer>
      <Layer speed={0.2}>
        <div className='relative h-dvh w-full'>
          <Container className='h-full pt-12 flex items-center justify-end'>
            <Image alt="Background Image" sizes='100vw' className='h-[150%] w-auto -mb-[40%] -mr-[10%]' src={Box} />
          </Container>
        </div>
      </Layer>
      <Layer speed={0.5}>
        <div className='relative h-dvh w-full flex items-center justify-start'>
          <Container>
            <div className='w-[50%] pb-24'>
              <h1 className="text-4xl md:text-6xl pb-10">Expert Solutions for<br /><span className="text-primary"><Typed /></span><span className="text-secondary">.</span></h1>
              <h2 className="text-2xl pb-10 text-center">Empower Your Business with Tailored IT Solutions</h2>
              <div className='text-center'>
                <Button className='p-4 pt-5 text-xl' variant="secondary" asChild>
                  <NextLink href="/#contact">
                    Let's Chat
                  </NextLink>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </Layer>
    </Parallax>
  )
}

