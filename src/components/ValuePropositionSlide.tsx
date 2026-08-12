"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { PitchSlide } from "../data/slides";

const scenes = [
  {
    image: "/assets/page-4/ecosistema-colaborativo.png",
    kicker: "DE UNA OPORTUNIDAD AISLADA",
    title: "Nuevas relaciones comerciales.",
    body: "Comercios y operadores convierten una oferta existente en una experiencia lista para activarse.",
    metric: "OFERTA + OPERACIÓN",
  },
  {
    image: "/assets/page-4/costos-compartidos.png",
    kicker: "A UNA RED QUE COLABORA",
    title: "Costos y capacidad compartidos.",
    body: "Varios operadores integran cupos, reducen costos y aprovechan mejor los recursos disponibles.",
    metric: "44 / 50 CUPOS",
  },
  {
    image: "/assets/page-4/cupos-compartidos.png",
    kicker: "Y CREA NUEVO VALOR",
    title: "Más rutas. Más ventas. Más ocupación.",
    body: "TeCaiGO conecta solicitudes, oferta y disponibilidad para abrir nuevos canales de comercialización.",
    metric: "UN SOLO ECOSISTEMA",
  },
];

export default function ValuePropositionSlide({slide,reduceMotion}:{slide:PitchSlide;reduceMotion:boolean}) {
  const [active,setActive]=useState(0);
  useEffect(()=>{
    if(reduceMotion) return;
    const timer=window.setInterval(()=>setActive(value=>(value+1)%scenes.length),10000);
    return()=>window.clearInterval(timer);
  },[reduceMotion]);
  const scene=scenes[active];
  return <div className="value-sequence" aria-label="Secuencia de propuesta de valor de TeCaiGO">
    <AnimatePresence mode="popLayout" initial>
      <motion.figure key={scene.image} className="value-sequence__scene"
        initial={reduceMotion?false:{x:"100%",opacity:1}}
        animate={{x:"0%",opacity:1}}
        exit={reduceMotion?undefined:{x:"-18%",opacity:0}}
        transition={{duration:reduceMotion?0:1.25,ease:[.22,1,.36,1]}}>
        <img src={scene.image} alt=""/>
        <div className="value-sequence__veil"/>
      </motion.figure>
    </AnimatePresence>
    <div className="value-sequence__lines" aria-hidden="true"><i/><i/><i/></div>
    <AnimatePresence mode="wait">
      <motion.div key={active} className="value-sequence__copy"
        initial={reduceMotion?false:{opacity:0,y:35}}
        animate={{opacity:1,y:0}}
        exit={reduceMotion?undefined:{opacity:0,y:-18}}
        transition={{delay:reduceMotion?0:.45,duration:.75}}>
        <small>{scene.kicker}</small>
        <h1>{scene.title}</h1>
        <p>{scene.body}</p>
        <strong>{scene.metric}</strong>
      </motion.div>
    </AnimatePresence>
    <motion.div className="value-sequence__thesis" initial={reduceMotion?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:reduceMotion?0:1.1,duration:.8}}>
      <span>PROPUESTA DE VALOR</span>
      <p><b>No vendemos tours por internet.</b> Convertimos relaciones dispersas en un ecosistema colaborativo.</p>
    </motion.div>
    <div className="value-sequence__steps">{scenes.map((item,index)=><span key={item.image} className={index===active?"is-active":""}><i/></span>)}</div>
  </div>;
}
