'use client'

import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

export default function CountUp() {

  const box = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(box.current, {
        scrollTrigger: {
          trigger: box.current,
          endTrigger: box.current,
          start: "-50px center",
          end: () => `+=150px`,
          scrub: 3,
          pin: box.current,
          pinSpacing: false,
          markers: true,
          toggleActions: "restart pause restart pause"
        },
        textContent: 0,
        duration: 1,
        snap: {
            textContent: 1
        }
    });
  });

  return (
    <div>
      <div ref={box} className='h-[50px] w-[50px] bg-[#ccc]'>
        20000
      </div>
      CountUp
    </div>
  )
}

