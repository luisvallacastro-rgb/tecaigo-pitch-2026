"use client";

import { motion } from "framer-motion";
import type { PitchSlide } from "../data/slides";

const scenes = [
  {
    image:"/assets/hero/guides-cluster.png",
    eyebrow:"COLABORACIÓN",
    title:"Compartir costos. Llenar cupos.",
    detail:"Tour operadores creando experiencias y colaborando como una sola red.",
    focus:"center 42%",
  },
  {
    image:"/assets/homefeed-commerce.png",
    eyebrow:"NUEVAS RUTAS",
    title:"La oferta disponible se convierte en oportunidad.",
    detail:"Hoteles, restaurantes y comercios integrándose a nuevas experiencias.",
    focus:"center top",
  },
  {
    image:"/assets/transport-route-assignment.png",
    eyebrow:"CAPACIDAD INSTALADA",
    title:"Cada vehículo disponible puede activar una ruta.",
    detail:"TeCaiGO conecta capacidad de transporte con recorridos que necesitan cobertura.",
    focus:"center top",
  },
  {
    image:"/assets/event-public.png",
    eyebrow:"NUEVOS CANALES DE VENTA",
    title:"Más personas pueden comercializar la experiencia.",
    detail:"Operadores y comisionistas generando ingresos con eventos públicos.",
    focus:"center top",
  },
  {
    image:"/assets/innovation-ecosystem-value-hd.png",
    eyebrow:"ECOSISTEMA DIGITAL COLABORATIVO",
    title:"Una oportunidad puede nacer en cualquier punto de la red.",
    detail:"TeCaiGO la conecta y la convierte en valor.",
    focus:"center center",
  },
];

const SCENE_SECONDS = 4;

export default function SlideProductInnovationClosing({ reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  return (
    <div className="innovation-film" aria-label="Innovación conectada de TeCaiGO">
      <div className="innovation-film__scenes">
        {scenes.map((scene,index) => (
          <motion.figure
            key={scene.eyebrow}
            className={`innovation-film__scene innovation-film__scene--${index + 1}`}
            style={{ zIndex:index + 1 }}
            initial={reduceMotion || index === 0 ? false : { clipPath:index % 2 ? "inset(100% 0 0 0)" : "inset(0 100% 0 0)" }}
            animate={{ clipPath:"inset(0 0 0 0)" }}
            transition={{ duration:reduceMotion?0:.75, delay:reduceMotion?0:index * SCENE_SECONDS, ease:[.76,0,.24,1] }}
          >
            <motion.img
              src={scene.image}
              alt=""
              style={{ objectPosition:scene.focus }}
              initial={reduceMotion ? false : { scale:1.09 }}
              animate={{ scale:1.015 }}
              transition={{ duration:reduceMotion?0:4.8, delay:reduceMotion?0:index * SCENE_SECONDS, ease:"easeOut" }}
            />
            <div className="innovation-film__shade" />
            <div className="innovation-film__scan" aria-hidden="true" />
            <motion.figcaption
              initial={reduceMotion ? false : { opacity:0, y:34 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:reduceMotion?0:.55, delay:reduceMotion?0:index * SCENE_SECONDS + .35, ease:[.22,1,.36,1] }}
            >
              {index === scenes.length - 1 && <div className="innovation-film__brand"><span>TeCai</span><b>GO</b></div>}
              <span>{scene.eyebrow}</span>
              <h1>{scene.title}</h1>
              <p>{scene.detail}</p>
            </motion.figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="innovation-film__network" aria-hidden="true">
        <i /><i /><i /><i /><i /><i />
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path d="M8 70 C24 28 39 75 52 43 S78 22 92 62" initial={{ pathLength:0, opacity:0 }} animate={{ pathLength:1, opacity:.55 }} transition={{ duration:reduceMotion?0:15, delay:reduceMotion?0:1.5, ease:"easeInOut" }} />
          <motion.path d="M13 23 C35 52 47 19 69 52 S84 78 95 35" initial={{ pathLength:0, opacity:0 }} animate={{ pathLength:1, opacity:.28 }} transition={{ duration:reduceMotion?0:16, delay:reduceMotion?0:2.4, ease:"easeInOut" }} />
        </svg>
      </div>

    </div>
  );
}
