"use client";

import { motion } from "framer-motion";
import { Building2, CloudCog, Megaphone } from "lucide-react";

const stages = [
  {
    icon: Building2,
    title: "Formalización empresarial y protección de marca",
    text: "Constitución de la SAS, registro de marca y preparación legal para operar.",
  },
  {
    icon: CloudCog,
    title: "Fortalecimiento tecnológico",
    text: "Infraestructura Azure, publicación de TeCaigo.App, soporte de TeCaigo.Core y TeCaigo.com, y recursos tecnológicos para la operación comercial.",
  },
  {
    icon: Megaphone,
    title: "Mercadeo y lanzamiento",
    text: "Lanzamiento oficial, campañas digitales segmentadas, captación de actores y penetración de mercado.",
  },
] as const;

export default function ProjectPlanSlide({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="project-plan">
      <motion.img
        className="project-plan__image"
        src="/assets/tourist-final-destination.png"
        alt="Turista explorando experiencias desde TeCaigo"
        initial={reduceMotion ? false : { scale: 1.045 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 14.5, ease: "easeOut" }}
      />
      <div className="project-plan__veil" aria-hidden="true" />
      <motion.section
        className="project-plan__panel"
        initial={reduceMotion ? false : { opacity: 0, x: -36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduceMotion ? 0 : .8, ease: [0.22, 1, 0.36, 1] }}
      >
        <small>PLAN DE IMPLEMENTACIÓN</small>
        <h1>Implementación comercial y fortalecimiento de TeCaigo</h1>
        <div className="project-plan__stages">
          {stages.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              className="project-stage"
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : .5 + index * .18, duration: .58 }}
            >
              <span className="project-stage__number">0{index + 1}</span>
              <span className="project-stage__icon"><Icon /></span>
              <div><strong>{title}</strong><p>{text}</p></div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
