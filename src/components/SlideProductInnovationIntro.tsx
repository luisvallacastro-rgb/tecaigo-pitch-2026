"use client";

import { motion } from "framer-motion";
import type { PitchSlide } from "../data/slides";

type Props = {
  slide: PitchSlide;
  reduceMotion: boolean;
  running: boolean;
};

const FRAME_SECONDS = 2.05;

export default function SlideProductInnovationIntro({ slide, reduceMotion, running }: Props) {
  const actors = slide.innovationIntro?.actors ?? [];
  const subtitle = slide.bullets?.[0];

  return (
    <div className="innovation-cinematic" aria-label="Innovación de TeCaiGO">
      <div className="innovation-cinematic__frames" aria-hidden="true">
        {actors.map((actor, index) => (
          <motion.figure
            key={actor.id}
            className="innovation-cinematic__frame"
            style={{ zIndex: index + 1 }}
            initial={reduceMotion || index === 0 ? false : { clipPath: "inset(0 0 0 100%)" }}
            animate={{ clipPath: running || index === 0 ? "inset(0 0 0 0%)" : "inset(0 0 0 100%)" }}
            transition={{
              duration: reduceMotion ? 0 : 0.42,
              delay: reduceMotion ? 0 : index * FRAME_SECONDS,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <motion.img
              src={actor.image}
              alt=""
              initial={reduceMotion ? false : { scale: 1.08 }}
              animate={{ scale: running ? 1.015 : 1.08 }}
              transition={{ duration: reduceMotion ? 0 : 2.8, delay: reduceMotion ? 0 : index * FRAME_SECONDS, ease: "easeOut" }}
            />
            <div className="innovation-cinematic__shade" />
            <motion.figcaption
              initial={reduceMotion ? false : { opacity: 0, x: -30 }}
              animate={{ opacity: running || index === 0 ? 1 : 0, x: running || index === 0 ? 0 : -30 }}
              transition={{ duration: 0.34, delay: reduceMotion ? 0 : index * FRAME_SECONDS + 0.28 }}
            >
              <span>0{index + 1}</span>
              <div><strong>{actor.label}</strong><small>{actor.description}</small></div>
            </motion.figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.div
        className="innovation-cinematic__question"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={!running || reduceMotion ? { opacity: 1, scale: 1 } : { opacity: [0, 1, 1, 0], scale: [0.96, 1, 1, 1.02] }}
        transition={reduceMotion ? { duration: 0 } : { duration: 8.35, times: [0, 0.04, 0.9, 1], ease: "easeInOut" }}
      >
        <span>{slide.eyebrow}</span>
        <h1>{slide.title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </motion.div>

      <motion.div
        className="innovation-cinematic__finale"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: running ? 1 : 0, y: running ? 0 : 16 }}
        transition={{ duration: 0.58, delay: reduceMotion ? 0 : 8.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div><span>TeCai</span><b>GO</b></div>
        <p>{slide.statement}</p>
      </motion.div>

      <motion.div
        className="innovation-cinematic__timeline"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: running ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 10, ease: "linear" }}
      />
    </div>
  );
}
