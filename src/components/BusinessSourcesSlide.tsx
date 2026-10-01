"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, FileCheck2, Megaphone, Repeat2 } from "lucide-react";

const sources = [
  { icon: Repeat2, label: "Suscripciones", text: "Uso de TeCaigo.Core." },
  { icon: BadgeDollarSign, label: "Comisiones", text: "Reservas e intermediación." },
  { icon: Megaphone, label: "Posicionamiento", text: "Publicidad y visibilidad comercial." },
  { icon: FileCheck2, label: "Servicios administrativos", text: "Gestión y facturación electrónica." },
] as const;

export default function BusinessSourcesSlide({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="business-sources">
      <motion.img
        className="business-sources__image"
        src="/assets/business/tecaigo-reserva-semuq.png"
        alt="Turista reservando una experiencia en TeCaigo"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="business-sources__shade" aria-hidden="true" />
      <motion.section
        className="business-sources__panel"
        initial={reduceMotion ? false : { opacity: 0, x: 42 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: reduceMotion ? 0 : .25, duration: .8, ease: [0.22, 1, 0.36, 1] }}
      >
        <small>UN ECOSISTEMA · MÚLTIPLES INGRESOS</small>
        <h1>Fuentes de<br />ingreso.</h1>
        <div className="business-sources__list">
          {sources.map(({ icon: Icon, label, text }, index) => (
            <motion.div
              className="business-source"
              key={label}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : .55 + index * .13, duration: .55 }}
            >
              <span><Icon /></span>
              <p><strong>{label}</strong>{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
