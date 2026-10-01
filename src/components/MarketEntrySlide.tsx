"use client";

import { motion } from "framer-motion";

export default function MarketEntrySlide({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="market-entry">
      <motion.img className="market-entry__image" src="/assets/project/entrada-mercado-tecaigo.png" alt="Lanzamiento oficial de TeCaigo ante cien asistentes" initial={reduceMotion ? false : { scale: 1.035 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 24.5, ease: "easeOut" }} />
      <motion.div className="market-entry__veil" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reduceMotion ? 0 : 1, duration: reduceMotion ? 0 : .65, ease: "easeOut" }} />
      <motion.section className="market-entry__summary" initial={reduceMotion ? false : { opacity: 0, x: -38 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 1, duration: reduceMotion ? 0 : .8, ease: [0.22, 1, 0.36, 1] }}>
        <small>ENTRADA AL MERCADO</small>
        <h1>Lanzamos, medimos y convertimos.</h1>
        <p>Una entrada comercial diseñada para transformar visibilidad en adopción y primeras operaciones.</p>
        <div className="market-entry__investment"><span>INVERSIÓN DE LA ETAPA · 43.6% DEL PROYECTO</span><strong>US$2,420</strong></div>
        <div className="market-entry__breakdown">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.5, duration: .5 }}><strong>US$1,320</strong><span>Lanzamiento oficial para 100 personas</span></motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.65, duration: .5 }}><strong>US$1,100</strong><span>Campañas digitales segmentadas · meses 2 al 6</span></motion.div>
        </div>
        <div className="market-entry__result"><span>RESULTADO ESPERADO</span><strong>Tráfico + registros + actores incorporados + primeras operaciones.</strong></div>
        <blockquote>“No buscamos solamente alcance. Buscamos adopción.”</blockquote>
      </motion.section>
    </div>
  );
}
