'use client'
import React, { PropsWithChildren, RefObject, useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ParallaxProps = {
  className: string,
  children: React.ReactElement<LayerProps>[];
};

export default function Parallax({ className, children }: ParallaxProps) {

  const [height, setHeight] = useState(0);

  const parallaxRef = useRef(null);
  const [layerRefs, setLayerRefs] = useState<React.RefObject<HTMLDivElement | null>[]>([]);
  const [layers, setLayers] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const refs: React.RefObject<HTMLDivElement | null>[] = [];
    const layers = React.Children.map(children, (child, index) => {
      const ref = React.createRef<HTMLDivElement | null>();
      refs.push(ref);
      return <RenderedLayer ref={ref} key={index} speed={child.props.speed}>{child.props.children}</RenderedLayer>
    });
    setLayerRefs(refs);
    setLayers(layers);
  }, [children]);

  useEffect(()=>{
    if (!parallaxRef.current) return;
    const height = (parallaxRef.current as HTMLElement).clientHeight;
    setHeight(height);
  },[parallaxRef]);

  useGSAP(() => {
    if (height === 0) return;
    gsap.registerPlugin(ScrollTrigger);
    layerRefs.forEach((layerRef) => {
      if (layerRef.current === null) return;
      const speed: number = Number((layerRef.current as HTMLElement).dataset.speed!) * (-1) + 1;
      gsap.to(layerRef.current, {
        y: height * speed,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, [height]);

  return (
    <div ref={parallaxRef} className={className} style={{overflow: 'hidden'}}>
      { layers }
    </div>
  )
}


type LayerProps = {
  speed: number;
} & PropsWithChildren;

export function Layer({}: LayerProps) {
  return (
    <></>
  )
}


type RenderedLayerProps = {
  ref: RefObject<HTMLDivElement | null>;
} & LayerProps;

function RenderedLayer({ ref, children, speed }: RenderedLayerProps) {

  const [height, setHeight] = useState(0);

  useGSAP(() => {
    if (!ref.current) return;
    setHeight((ref.current as HTMLElement).clientHeight);
  }, [ref]);

  return (
    <div data-speed={speed} ref={ref} style={{ marginBottom: -height, overflow: "hidden" }}>
      { children }
    </div>
  )
}

