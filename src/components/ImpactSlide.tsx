"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const scenes = [
  {
    image: "/assets/page-8/empleo-turistico.png",
    kicker: "UNA INDUSTRIA QUE YA MUEVE AL PAÍS",
    metric: "4.1 M · US$3,635 M · +300 mil empleos",
    text: "El Salvador recibió 4.1 M de visitantes y generó US$3,635 M en divisas turísticas, sosteniendo más de 300 mil empleos.",
  },
  {
    image: "/assets/page-8/economia-2024.png",
    kicker: "UNA RED QUE HACE MÁS EFICIENTE LO EXISTENTE",
    metric: "OFERTA + CAPACIDAD + DEMANDA",
    text: "TeCaigo conecta operadores, transporte, comercios y turistas, creando nuevas rutas y haciendo más eficiente la capacidad turística existente.",
  },
  {
    image: "/assets/page-8/economia-2025.png",
    kicker: "UN IMPACTO ALCANZABLE",
    metric: "1% → US$36.4 M",
    text: "Al conectar solo el 1% de esta actividad, TeCaigo podría movilizar cerca de US$36.4 M, impulsando además formalización e inclusión financiera.",
  },
] as const;

const SCENE_MS = 10000;

export default function ImpactSlide({ reduceMotion, running }: { reduceMotion: boolean; running: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduceMotion || !running) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % scenes.length), SCENE_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, running]);

  const scene = scenes[active];

  return (
    <div className="impact-slide" aria-label="Impacto económico y turístico de TeCaiGO">
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          className="impact-slide__evidence"
          style={{ position: "absolute", zIndex: 1, inset: 0, width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "center top" }}
          key={scene.image}
          src={scene.image}
          alt="Evidencia del impacto económico y turístico en El Salvador"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.05, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div
        className="impact-slide__chrome"
        style={{ background: "linear-gradient(180deg, rgba(1,8,10,.3) 0%, transparent 18%, transparent 58%, rgba(1,8,10,.82) 100%), linear-gradient(90deg, rgba(1,8,10,.32), transparent 18%, transparent 88%, rgba(1,8,10,.24))" }}
        aria-hidden="true"
      />
      <AnimatePresence mode="wait">
        <motion.section
          className="impact-slide__copy"
          style={{ left: "7%", bottom: "8%", width: "min(990px, 60vw)", boxShadow: "none" }}
          key={active}
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
          transition={{ duration: reduceMotion ? 0 : .72, delay: reduceMotion ? 0 : .28, ease: [.22, 1, .36, 1] }}
        >
          <small>{scene.kicker}</small>
          <h1>{scene.text}</h1>
          <strong>{scene.metric}</strong>
        </motion.section>
      </AnimatePresence>

      <nav className="impact-slide__steps" aria-label={`Vista ${active + 1} de ${scenes.length}`}>
        {scenes.map((item, index) => (
          <button key={item.image} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Mostrar impacto ${index + 1}`}>
            <span>{String(index + 1).padStart(2, "0")}</span><i />
          </button>
        ))}
      </nav>
    </div>
  );
}
