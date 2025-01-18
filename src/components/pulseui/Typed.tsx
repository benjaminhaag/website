'use client'
import React, { useEffect, useRef } from 'react'
import { Typed as TypedJS } from 'react-typed';

export default function Typed() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new TypedJS(el.current, {
      strings: [
        "SaaS",
        "Cloud",
        "Web Development",
        "Linux",
        "IT Security"
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <span className='max-w-full' ref={el}></span>
  )
}

