"use client";

import { motion } from "framer-motion";
import type { PitchSlide } from "../data/slides";

const words = [
  "Conexión","Inclusión","Ventas","Ahorro","Ocupación","Reservas","Rutas","Alianzas","Turismo","Integración",
  "Visibilidad","Experiencias","Formalización","Logística","Movilidad","Desarrollo","Crecimiento","Innovación",
  "Colaboración","Oportunidades","Rentabilidad","Expansión","Digitalización","Bancarización","Trazabilidad",
  "Productividad","Competitividad","Comercialización","Coordinación","Ecosistema"
];

export default function ValuePropositionSlide({slide,reduceMotion}:{slide:PitchSlide;reduceMotion:boolean}) {
  return <div className="value-cloud" aria-label="Beneficios de TeCaiGO">
    <div className="value-cloud__aura" aria-hidden="true"/>
    <div className="value-cloud__block">
      {words.slice(0,29).map((word,index) => (
        <motion.span
          key={word}
          className={`value-cloud__word word-${index + 1}`}
          initial={reduceMotion ? false : {opacity:0,scale:.35,filter:"blur(10px)"}}
          animate={{opacity:1,scale:1,filter:"blur(0px)"}}
          transition={{delay:reduceMotion ? 0 : .22 + index * .16,duration:.7,type:"spring",stiffness:115,damping:16}}
        >{word}</motion.span>
      ))}
      <motion.div
        className="value-cloud__hero"
        initial={reduceMotion ? false : {opacity:0,scaleX:.42,filter:"blur(16px)"}}
        animate={{opacity:1,scaleX:1,filter:"blur(0px)"}}
        transition={{delay:reduceMotion ? 0 : 2.8,duration:1.15,ease:[.22,1,.36,1]}}
      >BENEFICIOS</motion.div>
    </div>
    <motion.div className="value-cloud__message" initial={reduceMotion?false:{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:reduceMotion?0:6.1,duration:.85}}>
      <span>PROPUESTA DE VALOR</span>
      <h1>{slide.title}</h1>
    </motion.div>
  </div>;
}
