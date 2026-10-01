"use client";

import { motion } from "framer-motion";

const campaign = [
  ["Mes 2", "US$150", "Expectativa"],
  ["Mes 3", "US$350", "Lanzamiento"],
  ["Mes 4", "US$250", "Penetración"],
  ["Mes 5", "US$200", "Conversión"],
  ["Mes 6", "US$150", "Remarketing"],
] as const;

const launchIncludes = ["Instalaciones", "Alimentación", "Proyector y sonido", "Wifi", "Servicio y mobiliario"];
const audiences = ["Tour operadores", "Transporte", "Comercios turísticos", "Turistas"];

export default function MarketEntrySlide({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="market-entry">
      <motion.img className="market-entry__image" src="/assets/project/entrada-mercado-tecaigo.png" alt="Lanzamiento oficial de TeCaigo ante cien asistentes" initial={reduceMotion ? false : { scale: 1.035 }} animate={{ scale: 1 }} transition={{ duration: reduceMotion ? 0 : 24.5, ease: "easeOut" }} />
      <div className="market-entry__veil" aria-hidden="true" />

      <motion.header className="market-entry__heading" initial={reduceMotion ? false : { opacity: 0, y: -22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .75 }}>
        <div><small>ENTRADA AL MERCADO</small><h1>Lanzamos, medimos y convertimos.</h1></div>
        <div className="market-entry__total"><strong>US$2,420</strong><span>43.6% DEL PROYECTO</span></div>
      </motion.header>

      <div className="market-entry__columns">
        <motion.section className="market-entry__card market-entry__launch" initial={reduceMotion ? false : { opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .35, duration: .7 }}>
          <div className="market-entry__card-title"><span>LANZAMIENTO OFICIAL</span><strong>US$1,320</strong></div>
          <b>100 personas</b>
          <div className="market-entry__includes">{launchIncludes.map(item => <span key={item}>{item}</span>)}</div>
          <p>La cotización real respalda US$1,200 para 100 asistentes más US$120 de propina.</p>
        </motion.section>

        <motion.section className="market-entry__card market-entry__campaigns" initial={reduceMotion ? false : { opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : .48, duration: .7 }}>
          <div className="market-entry__card-title"><span>CAMPAÑAS DIGITALES</span><strong>US$1,100</strong></div>
          <div className="market-entry__timeline">{campaign.map(([month, amount, phase]) => <div key={month}><span>{month}</span><strong>{amount}</strong><b>{phase}</b></div>)}</div>
          <div className="market-entry__audiences">{audiences.map(item => <span key={item}>{item}</span>)}</div>
        </motion.section>
      </div>

      <motion.footer className="market-entry__footer" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .85, duration: .65 }}>
        <div><span>RESULTADO ESPERADO</span><strong>Tráfico + registros + actores incorporados + primeras operaciones.</strong></div>
        <blockquote>“No buscamos solamente alcance. Buscamos adopción.”</blockquote>
        <p>Cada dólar tiene una función: <b>formalizar, operar o llevar TeCaigo al mercado.</b></p>
      </motion.footer>
    </div>
  );
}
