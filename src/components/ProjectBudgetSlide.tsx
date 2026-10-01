"use client";

import { motion } from "framer-motion";

const budget = [
  ["Fortalecimiento tecnológico", "US$2,735.56", "49.2%"],
  ["Mercadeo y lanzamiento", "US$2,420.00", "43.6%"],
  ["Formalización y marca", "US$400.00", "7.2%"],
] as const;

export default function ProjectBudgetSlide({ reduceMotion }: { reduceMotion: boolean }) {
  const delay = reduceMotion ? 0 : 1;
  return (
    <div className="project-budget">
      <motion.img className="project-budget__image" src="/assets/project/presupuesto-general-tecaigo.png" alt="Transportista turístico utilizando TeCaigo junto a su vehículo" initial={reduceMotion ? false : { scale: 1.035 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 14.5, ease: "easeOut" }} />
      <motion.div className="project-budget__veil" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: reduceMotion ? 0 : .65, ease: "easeOut" }} />
      <motion.section className="project-budget__panel" initial={reduceMotion ? false : { opacity: 0, x: -38 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: reduceMotion ? 0 : .8, ease: [0.22, 1, 0.36, 1] }}>
        <small>PRESUPUESTO GENERAL</small>
        <h1>Una inversión enfocada en operar y crecer.</h1>
        <div className="project-budget__total"><span>TOTAL DEL PROYECTO</span><strong>US$5,555.56</strong><b>100%</b></div>
        <div className="project-budget__lines">
          {budget.map(([label, amount, share], index) => (
            <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.5 + index * .13, duration: .5 }}><span>{label}</span><strong>{amount}</strong><b>{share}</b></motion.div>
          ))}
        </div>
        <div className="project-budget__funding">
          <div><span>COFINANCIAMIENTO SOLICITADO</span><strong>US$5,000.00</strong></div>
          <div><span>CONTRAPARTIDA TECAIGO</span><strong>US$555.56</strong></div>
        </div>
        <blockquote>“Cada dólar tiene una función: formalizar, operar o llevar TeCaigo al mercado.”</blockquote>
      </motion.section>
    </div>
  );
}
