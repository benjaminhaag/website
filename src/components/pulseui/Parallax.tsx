import React, { PropsWithChildren, RefObject, useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ParallaxProps = {
  children: React.ReactElement<LayerProps>[];
};

export default function Parallax({ children }: ParallaxProps) {

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

  useEffect(() => {
    if (layerRefs.length === 0) return;
    const height = Math.max(...layerRefs.map((layer) => layer.current ? layer.current.clientHeight : 0));
    setHeight(height);
  }, [layerRefs]);

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
    <div ref={parallaxRef} style={{height, overflow: 'hidden'}}>
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

  useEffect(() => {
    if (!ref.current) return;
    setHeight((ref.current as HTMLElement).clientHeight);
  }, [ref]);

  return (
    <div data-speed={speed} ref={ref} style={{ marginBottom: -height }}>
      { children }
    </div>
  )
}

