"use client";

import { motion } from "framer-motion";
import type { PitchSlide } from "../data/slides";

export default function CompetitiveAdvantageSlide({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  return (
    <div className="competitive-advantage" aria-label="Ventaja competitiva de TeCaiGO">
      <motion.img
        src="/assets/page-7/ventaja-competitiva.png"
        alt="Ecosistema TeCaiGO conectado alrededor de su plataforma"
        initial={reduceMotion ? false : { scale: 1.075, x: "1.5%" }}
        animate={{ scale: 1.015, x: 0 }}
        transition={{ duration: reduceMotion ? 0 : 24.5, ease: "linear" }}
      />
      <div className="competitive-advantage__veil" aria-hidden="true" />
      <motion.div
        className="competitive-advantage__copy"
        initial={reduceMotion ? false : { opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : .7, duration: .9, ease: [.22, 1, .36, 1] }}
      >
        <span><i /> La ventaja que no se copia</span>
        <h1>El software puede copiarse.<br /><b>La confianza que conecta a toda una red, no.</b></h1>
      </motion.div>
      <motion.div
        className="competitive-advantage__signal"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.35, duration: 1.1, ease: [.22, 1, .36, 1] }}
        aria-hidden="true"
      />
    </div>
  );
}
