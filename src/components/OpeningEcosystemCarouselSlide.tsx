"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { PitchSlide } from "../data/slides";

export default function OpeningEcosystemCarouselSlide({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  const items = slide.openingCarousel ?? [];
  const trackItems = [...items, ...items];
  const headingRef = useRef<HTMLHeadingElement>(null);
  const offsetRef = useRef(0);
  const [headingOffset, setHeadingOffset] = useState(0);

  useEffect(() => {
    const centerHeading = () => {
      const heading = headingRef.current;
      if (!heading) return;
      const bounds = heading.getBoundingClientRect();
      const naturalCenter = bounds.left + bounds.width / 2 - offsetRef.current;
      const nextOffset = window.innerWidth / 2 - naturalCenter;
      offsetRef.current = nextOffset;
      setHeadingOffset(nextOffset);
    };

    const frame = window.requestAnimationFrame(centerHeading);
    window.addEventListener("resize", centerHeading);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", centerHeading);
    };
  }, []);

  return (
    <div className="opening-carousel" aria-label="Carrusel integrado de TeCaiGO para operadores, comercios y turistas">
      <motion.header
        className="opening-carousel__heading"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 ref={headingRef} style={{ transform: `translateX(${headingOffset}px)` }}>
          ¿Y si pudiéramos conectar todo el ecosistema turístico en un solo lugar?
        </h1>
      </motion.header>

      <div className="opening-carousel__viewport">
        <div className={`opening-carousel__track ${reduceMotion ? "is-static" : ""}`}>
          {trackItems.map((item, itemIndex) => (
            <article className="opening-carousel__card" key={`${item.role}-${item.title}-${itemIndex}`}>
              <div className="opening-carousel__phone">
                <img src={item.image} alt={`${item.title} para ${item.role} en TeCaiGO`} />
              </div>
            </article>
          ))}
        </div>
        <div className="opening-carousel__fade opening-carousel__fade--left" />
        <div className="opening-carousel__fade opening-carousel__fade--right" />
      </div>
    </div>
  );
}
