import React, { PropsWithChildren, RefObject, useEffect, useState } from "react";

type ParallaxProps = {
  children: React.ReactElement<LayerProps>[];
};

export default function Parallax({ children }: ParallaxProps) {

  const [height, setHeight] = useState(0);

  const [layerRefs, setLayerRefs] = useState<React.RefObject<HTMLDivElement | null>[]>([]);
  const [layers, setLayers] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const refs: React.RefObject<HTMLDivElement | null>[] = [];
    const layers = React.Children.map(children, (child, index) => {
      const ref = React.createRef<HTMLDivElement | null>();
      refs.push(ref);
      return <RenderedLayer ref={ref} key={index}>{child.props.children}</RenderedLayer>
    });
    setLayerRefs(refs);
    setLayers(layers);
  }, [children]);

  useEffect(() => {
    if (layerRefs.length === 0) return;
    const height = Math.max(...layerRefs.map((layer) => layer.current ? layer.current.clientHeight : 0));
    setHeight(height);
  }, [layerRefs]);

  return (
    <div style={{height}}>
      { layers }
    </div>
  )
}


type LayerProps = PropsWithChildren;

export function Layer({}: LayerProps) {
  return (
    <></>
  )
}


type RenderedLayerProps = {
  ref: RefObject<HTMLDivElement | null>;
} & LayerProps;

function RenderedLayer({ ref, children }: RenderedLayerProps) {

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setHeight((ref.current as HTMLElement).clientHeight);
  }, [ref]);

  return (
    <div ref={ref} style={{ marginBottom: -height }}>
      { children }
    </div>
  )
}

