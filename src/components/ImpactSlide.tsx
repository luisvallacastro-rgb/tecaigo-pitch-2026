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
      <div className="impact-slide__ambient" aria-hidden="true" />
      <div className="impact-slide__canvas">
        <img className="impact-slide__desk" src="/assets/page-8/impact-desk.png" alt="Computadora mostrando información económica de El Salvador" />
        <div className="impact-slide__screen">
          <AnimatePresence initial={false} mode="sync">
            <motion.img
              key={scene.image}
              src={scene.image}
              alt=""
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : .85, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="impact-slide__chrome" aria-hidden="true" />
      <AnimatePresence mode="wait">
        <motion.section
          className="impact-slide__copy"
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
