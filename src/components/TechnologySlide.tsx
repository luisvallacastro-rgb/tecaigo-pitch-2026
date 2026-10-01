"use client";

import { motion } from "framer-motion";

const investments = [
  ["US$1,129", "Producción audiovisual · DJI Mini 5 Pro"],
  ["US$1,348", "Azure 12 meses + publicación web, iOS y Android"],
  ["US$258.56", "Reserva técnica para consumo y escalamiento"],
] as const;

export default function TechnologySlide({ reduceMotion }: { reduceMotion: boolean }) {
  const delay = reduceMotion ? 0 : 1;
  return (
    <div className="technology-slide">
      <motion.img className="technology-slide__image" src="/assets/project/tecnologia-tecaigo.png" alt="Operador de TeCaigo utilizando un dron para producción audiovisual turística" initial={reduceMotion ? false : { scale: 1.035 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 24.5, ease: "easeOut" }} />
      <motion.div className="technology-slide__veil" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: reduceMotion ? 0 : .65, ease: "easeOut" }} />
      <motion.section className="technology-slide__panel" initial={reduceMotion ? false : { opacity: 0, x: 38 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: reduceMotion ? 0 : .8, ease: [0.22, 1, 0.36, 1] }}>
        <small>TECNOLOGÍA</small>
        <h1>Infraestructura para operar y crecer.</h1>
        <p>TeCaigo.Core, TeCaigo.App y TeCaigo.com compartirán operaciones, datos, reservas y transacciones en un solo ecosistema.</p>
        <div className="technology-slide__investment"><span>INVERSIÓN DE LA ETAPA · 49.2% DEL PROYECTO</span><strong>US$2,735.56</strong></div>
        <div className="technology-slide__costs">
          {investments.map(([amount, label], index) => (
            <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 1.5 + index * .13, duration: .5 }}><strong>{amount}</strong><span>{label}</span></motion.div>
          ))}
        </div>
        <div className="technology-slide__architecture" aria-label="Arquitectura tecnológica compartida"><span>TeCaigo.Core</span><i>→</i><span>API compartida</span><i>→</i><span>Azure SQL / Datos</span><b>TeCaigo.App + TeCaigo.com · 12 meses de infraestructura</b></div>
        <blockquote>“Una sola infraestructura. Tres plataformas. Una misma operación.”</blockquote>
      </motion.section>
    </div>
  );
}
