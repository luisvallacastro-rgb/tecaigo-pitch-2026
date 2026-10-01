"use client";

import { Check, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const evidence = [
  "Registros de TeCaigo.Core",
  "Métricas de TeCaigo.App y TeCaigo.com",
  "Reportes de campañas",
  "Facturas y comprobantes",
  "Registros transaccionales",
  "Documentación legal",
  "Fotografías y videos del lanzamiento",
] as const;

export default function VerificationSlide({ reduceMotion }: { reduceMotion: boolean }) {
  const delay = reduceMotion ? 0 : 1;
  return (
    <div className="verification-slide">
      <motion.img className="verification-slide__image" src="/assets/project/verificacion-sostenibilidad-tecaigo.png" alt="Comercio turístico operando con el ecosistema digital de TeCaigo" initial={reduceMotion ? false : { scale: 1.035 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 29.5, ease: "easeOut" }} />
      <motion.div className="verification-slide__veil" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: reduceMotion ? 0 : .65, ease: "easeOut" }} />
      <motion.section className="verification-slide__panel" initial={reduceMotion ? false : { opacity: 0, x: 38 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: reduceMotion ? 0 : .8, ease: [0.22, 1, 0.36, 1] }}>
        <small>VERIFICACIÓN Y SOSTENIBILIDAD</small>
        <h1>Resultados que pueden comprobarse.</h1>
        <p>Cada meta estará respaldada por evidencia legal, operativa, comercial y digital.</p>
        <div className="verification-slide__list">
          {evidence.map((item, index) => (
            <motion.div key={item} initial={reduceMotion ? false : { opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 1.45 + index * .11, duration: .45 }}><i><Check size={16} strokeWidth={3} /></i><span>{item}</span></motion.div>
          ))}
        </div>
        <div className="verification-slide__sustainability"><ShieldCheck size={28} /><span><b>SOSTENIBILIDAD</b><strong>Después del cofinanciamiento, la operación continuará mediante suscripciones, comisiones, publicidad y servicios administrativos.</strong></span></div>
      </motion.section>
    </div>
  );
}
