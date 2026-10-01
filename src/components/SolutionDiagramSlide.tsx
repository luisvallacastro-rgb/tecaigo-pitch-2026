"use client";

import { motion } from "framer-motion";

export default function SolutionDiagramSlide({ reduceMotion, reveal }: { reduceMotion: boolean; reveal: boolean }) {
  return (
    <div className="solution-diagram">
      <motion.img
        className="solution-diagram__image"
        src="/assets/solution/tecaigo-homefeed-anatomy.png"
        alt="Anatomía del HomeFeed de TeCaigo con navegación, categorías, publicación, oferta, galería, etiquetas, interacción y panel del clúster"
        initial={reduceMotion ? false : { opacity: 0, scale: .985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduceMotion ? 0 : .2, duration: .85, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="solution-diagram__reveal"
        initial={false}
        animate={{ opacity: reveal ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 1.05, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!reveal}
      >
        <motion.div
          className="solution-diagram__reveal-copy"
          initial={false}
          animate={{ opacity: reveal ? 1 : 0, scale: reveal ? 1 : .975 }}
          transition={{ delay: reveal && !reduceMotion ? .18 : 0, duration: reduceMotion ? 0 : .75, ease: [0.22, 1, 0.36, 1] }}
        >
          <small>DE LA OPORTUNIDAD A LA EXPERIENCIA</small>
          <p>Un comercio publica una oportunidad; una empresa de transporte aporta capacidad;</p>
          <p>un operador integra los servicios y crea una nueva ruta;</p>
          <strong>
            <span className="solution-diagram__core">TeCaigo.Core administra la operación</span>
            <span className="solution-diagram__tourist">y TeCaigo.com la lleva al turista.</span>
          </strong>
        </motion.div>
      </motion.div>
    </div>
  );
}
