'use client'
import Hero from '@/components/Hero';
import { LoremIpsum } from '@/components/LoremIpsum'
import CountUp from '@/components/pulseui/CountUp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';

export default function HomePage() {

  const box = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(box.current, {
      x: 100,
      duration:1,
      scrollTrigger: {
        trigger: box.current,
        start: "top center",
        markers: true,
        scrub: true
      }
    });
  }, [box]);

  return (
    <main>
      <Hero />
      <section>
        <div className='mt-16'>
        </div>
        <LoremIpsum />
        {/*<CountUp />*/}
        <div ref={box} className='p-5'>Hello</div>
        <LoremIpsum />
      </section> 
    </main>
  );
}
