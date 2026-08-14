"use client";

import { motion } from "framer-motion";

const closingLines = [
  { text: "TeCaiGO no solo conecta el turismo:", accent: false },
  { text: "conecta oportunidades,", accent: true },
  { text: "formaliza relaciones", accent: true },
  { text: "y construye la infraestructura", accent: false },
  { text: "para que el sector crezca como una sola red.", accent: false },
] as const;

export default function ClosingSlide({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="closing-slide" aria-label="Cierre del pitch de TeCaiGO">
      <motion.img
        className="closing-slide__image"
        src="/assets/tourist-final-destination.png"
        alt="Turista explorando una experiencia desde TeCaiGO"
        initial={reduceMotion ? false : { scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 14.5, ease: "easeOut" }}
      />
      <div className="closing-slide__veil" aria-hidden="true" />
      <motion.div
        className="closing-slide__signal"
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : .35, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="closing-slide__message">
        {closingLines.map((line, lineIndex) => (
          <motion.span
            className={line.accent ? "is-accent" : undefined}
            key={line.text}
            initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(9px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: reduceMotion ? 0 : .72,
              delay: reduceMotion ? 0 : .72 + lineIndex * .52,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line.text}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="closing-slide__glow"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, scale: .65 }}
        animate={{ opacity: [.08, .28, .12], scale: [1, 1.08, 1] }}
        transition={{ duration: reduceMotion ? 0 : 5.4, delay: reduceMotion ? 0 : 2.6, repeat: reduceMotion ? 0 : 1, ease: "easeInOut" }}
      />
    </div>
  );
}
