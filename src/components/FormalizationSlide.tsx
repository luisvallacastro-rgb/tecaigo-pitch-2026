"use client";

import { motion } from "framer-motion";

const costs = [
  ["US$100", "Constitución y registro SAS"],
  ["US$100", "Gestión de registro de marca"],
  ["US$155", "Aranceles y publicaciones"],
  ["US$45", "Costos documentales e institucionales"],
] as const;

export default function FormalizationSlide({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="formalization-slide">
      <motion.img
        className="formalization-slide__image"
        src="/assets/project/formalizacion-tecaigo.png"
        alt="Formalización empresarial y firma de documentación de TeCaigo"
        initial={reduceMotion ? false : { scale: 1.035 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 19.5, ease: "easeOut" }}
      />
      <motion.div
        className="formalization-slide__veil"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1, duration: reduceMotion ? 0 : .65, ease: "easeOut" }}
      />
      <motion.section
        className="formalization-slide__panel"
        initial={reduceMotion ? false : { opacity: 0, x: -38 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: reduceMotion ? 0 : 1, duration: reduceMotion ? 0 : .8, ease: [0.22, 1, 0.36, 1] }}
      >
        <small>FORMALIZACIÓN</small>
        <h1>Preparados para operar formalmente.</h1>
        <p className="formalization-slide__lead">TeCaigo será constituido como Sociedad por Acciones Simplificada y se gestionará la protección de la marca, creando la estructura jurídica necesaria para iniciar operaciones y relaciones comerciales.</p>
        <div className="formalization-slide__investment">
          <span>INVERSIÓN DE LA ETAPA</span>
          <strong>US$400</strong>
        </div>
        <div className="formalization-slide__costs">
          {costs.map(([amount, label], index) => (
            <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.55 + index * .12, duration: .5 }}>
              <strong>{amount}</strong><span>{label}</span>
            </motion.div>
          ))}
        </div>
        <div className="formalization-slide__result"><span>RESULTADO ESPERADO</span><strong>Empresa constituida + proceso de protección de marca gestionado.</strong></div>
      </motion.section>
    </div>
  );
}
