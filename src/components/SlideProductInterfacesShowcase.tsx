"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { PitchSlide } from "../data/slides";

const PANEL_DURATION = 7_500;

const photos = {
  operators:"/assets/product-unified/tour-operador.png",
  commerce:"/assets/product-unified/comercio.png",
  transport:"/assets/product-unified/transporte.png",
  tourists:"/assets/product-unified/turista.png",
} as const;

const captions = {
  operators:"Crea experiencias y coordina cupos.",
  commerce:"Convierte su oferta en nuevas rutas.",
  transport:"Activa su capacidad disponible.",
  tourists:"Descubre, reserva y compra.",
} as const;

export default function SlideProductInterfacesShowcase({ slide, reduceMotion, running }: { slide: PitchSlide; reduceMotion: boolean; running: boolean }) {
  const interfaces = slide.productInterfaces ?? [];
  const [activeIndex,setActiveIndex] = useState(0);

  useEffect(() => {
    if (!running || interfaces.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex(current => (current + 1) % interfaces.length), PANEL_DURATION);
    return () => window.clearInterval(timer);
  }, [interfaces.length,running]);

  return (
    <div className="product-unified" aria-label="Un producto, cuatro experiencias conectadas">
      <div className="product-unified__panels">
        {interfaces.map((item,index) => {
          const active = index === activeIndex;
          return (
            <motion.figure
              key={item.id}
              className={active ? "is-active" : ""}
            >
              <motion.img
                src={photos[item.id]}
                alt={`${item.label}: ${captions[item.id]}`}
                animate={{ scale:active ? 1.015 : 1.055, filter:active ? "brightness(.94) saturate(1)" : "brightness(.62) saturate(.78)" }}
                transition={{ duration:reduceMotion?0:1.05, ease:[.22,1,.36,1] }}
              />
              <div className="product-unified__shade" />
              <motion.figcaption animate={{ opacity:active?1:.62, y:active?0:9 }} transition={{ duration:reduceMotion?0:.55 }}>
                <span>0{index + 1}</span>
                <div><strong>{item.label}</strong><small>{captions[item.id]}</small></div>
              </motion.figcaption>
            </motion.figure>
          );
        })}
      </div>

      <motion.div className="product-unified__hub" animate={{ scale:[1,1.045,1] }} transition={{ duration:2.4, repeat:Infinity, ease:"easeInOut" }}>
        <strong><span>TeCai</span>GO</strong>
        <small>UNA SOLA RED</small>
      </motion.div>

      <div className="product-unified__headline">
        <span>PRODUCTO · CUATRO EXPERIENCIAS CONECTADAS</span>
        <h1>Un producto. Cuatro formas de crear valor.</h1>
      </div>

      <div className="product-unified__connection" aria-hidden="true">
        <i /><i /><i /><i />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M50 50 C38 42 26 43 12.5 50" />
          <path d="M50 50 C45 48 41 47 37.5 50" />
          <path d="M50 50 C55 48 59 47 62.5 50" />
          <path d="M50 50 C64 42 77 43 87.5 50" />
        </svg>
      </div>
    </div>
  );
}
