"use client";

import { motion } from "framer-motion";
import type { PitchSlide } from "../data/slides";

export default function OpeningEcosystemCarouselSlide({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  const items = slide.openingCarousel ?? [];
  const trackItems = [...items, ...items];

  return (
    <div className="opening-carousel" aria-label="Carrusel integrado de TeCaiGO para operadores, comercios y turistas">
      <motion.header
        className="opening-carousel__heading"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>{slide.eyebrow}</span>
        <strong>{slide.title}</strong>
        <small>{slide.statement}</small>
      </motion.header>

      <div className="opening-carousel__viewport">
        <div className={`opening-carousel__track ${reduceMotion ? "is-static" : ""}`}>
          {trackItems.map((item, itemIndex) => (
            <article className="opening-carousel__card" key={`${item.role}-${item.title}-${itemIndex}`}>
              <div className="opening-carousel__phone">
                <i className="opening-carousel__island" aria-hidden="true" />
                <img src={item.image} alt={`${item.title} para ${item.role} en TeCaiGO`} />
              </div>
              <span>{item.role}</span>
              <strong>{item.title}</strong>
            </article>
          ))}
        </div>
        <div className="opening-carousel__fade opening-carousel__fade--left" />
        <div className="opening-carousel__fade opening-carousel__fade--right" />
      </div>

      <div className="opening-carousel__roles" aria-label="Actores conectados">
        <span>Tour operadores</span><i />
        <span>Comercios turísticos</span><i />
        <span>Turistas</span>
      </div>
    </div>
  );
}
