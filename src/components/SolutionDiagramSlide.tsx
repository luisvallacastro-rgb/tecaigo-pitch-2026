"use client";

import { motion } from "framer-motion";

export default function SolutionDiagramSlide({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="solution-diagram">
      <motion.div
        className="solution-diagram__statement"
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
      >
        <small>DE LA OPORTUNIDAD A LA EXPERIENCIA</small>
        <p>
          Un comercio publica una oportunidad; una empresa de transporte aporta capacidad; un operador integra los servicios y crea una nueva ruta; <strong>TeCaigo.Core administra la operación y TeCaigo.com la lleva al turista.</strong>
        </p>
      </motion.div>
      <motion.img
        className="solution-diagram__image"
        src="/assets/solution/tecaigo-homefeed-anatomy.png"
        alt="Anatomía del HomeFeed de TeCaigo con navegación, categorías, publicación, oferta, galería, etiquetas, interacción y panel del clúster"
        initial={reduceMotion ? false : { opacity: 0, scale: .985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduceMotion ? 0 : .2, duration: .85, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
