"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const goals = [
  ["Formalización", "SAS constituida y solicitud de marca gestionada"],
  ["Ecosistema listo", "TeCaigo.Core, App y .com preparados para operar"],
  ["Publicación", "Aplicación disponible en iOS y Android"],
  ["Contenido", "Banco inicial de producción audiovisual"],
  ["Lanzamiento", "Capacidad para 100 asistentes"],
  ["Campañas", "5 etapas digitales ejecutadas"],
  ["25 actores", "10 operadores · 10 comercios · 5 transportistas"],
  ["300 consumidores", "Usuarios registrados en el ecosistema"],
  ["10 experiencias", "Rutas o experiencias creadas"],
  ["30 operaciones", "Con 8 clientes generando ingresos"],
] as const;

export default function ResultsChecklistSlide({ reduceMotion }: { reduceMotion: boolean }) {
  const delay = reduceMotion ? 0 : 1;
  return (
    <div className="results-checklist">
      <motion.img className="results-checklist__image" src="/assets/project/resultados-seis-meses-tecaigo.png" alt="Operación de rutas y clústeres turísticos administrada desde TeCaigo.Core" initial={reduceMotion ? false : { scale: 1.035 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 29.5, ease: "easeOut" }} />
      <motion.div className="results-checklist__veil" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: reduceMotion ? 0 : .65, ease: "easeOut" }} />
      <motion.section className="results-checklist__panel" initial={reduceMotion ? false : { opacity: 0, x: 38 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: reduceMotion ? 0 : .8, ease: [0.22, 1, 0.36, 1] }}>
        <small>METAS A SEIS MESES</small>
        <h1>Resultados concretos y verificables.</h1>
        <p>El proyecto concluye con capacidad legal, tecnológica y comercial para operar.</p>
        <div className="results-checklist__grid">
          {goals.map(([title, detail], index) => (
            <motion.div key={title} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.45 + index * .1, duration: .45 }}>
              <i><Check size={16} strokeWidth={3} /></i><span><strong>{title}</strong><b>{detail}</b></span>
            </motion.div>
          ))}
        </div>
        <blockquote>Seis meses para pasar de preparación a operaciones reales.</blockquote>
      </motion.section>
    </div>
  );
}
