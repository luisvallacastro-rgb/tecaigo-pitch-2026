"use client";

import { motion } from "framer-motion";

export default function SolutionHeroSlide({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="solution-hero">
      <img
        className="solution-hero__image"
        src="/assets/solution/tecaigo-multiplatform-ecosystem.png"
        alt="Ecosistema TeCaigo disponible en computadora, laptop y teléfono"
      />
      <div className="solution-hero__shade" />
      <motion.blockquote
        className="solution-hero__thought"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : .45, duration: .8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>Otras plataformas comercializan experiencias que ya existen.</span>
        <strong>TeCaigo conecta los recursos para que nuevas experiencias puedan existir.</strong>
      </motion.blockquote>
    </div>
  );
}
