"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { PitchSlide } from "../data/slides";

const scenes = [
  {
    image: "/assets/page-4/comunicacion.png",
    kicker: "ETAPA ACTUAL",
    title: "TeCaigo entra a su etapa comercial.",
    body: "TeCaigo.Core, TeCaigo.App y TeCaigo.com se encuentran en la etapa final de preparación para operar en mercado.",
    metric: "LISTOS PARA SALIR AL MERCADO",
    thesisLabel: "SIGUIENTE PASO",
    thesis: "El siguiente paso ya no es construir la idea, sino formalizar, lanzar, incorporar actores y validar operaciones reales.",
  },
  {
    image: "/assets/page-4/costos.png",
    kicker: "ESTRUCTURA DE COSTOS",
    title: "Crecemos sin sobredimensionar la operación.",
    body: "Los principales costos de TeCaigo se concentran en tecnología, infraestructura cloud, mercadeo, soporte y operación. La estructura de personal crecerá gradualmente conforme aumenten los usuarios, las transacciones y los ingresos.",
    metric: "TECNOLOGÍA · CLOUD Y DATOS · MERCADEO · SOPORTE · OPERACIÓN",
    thesisLabel: "DISCIPLINA FINANCIERA",
    thesis: "Primero validamos ingresos. Luego ampliamos estructura.",
  },
  {
    image: "/assets/page-4/cupos.png",
    kicker: "INCLUSIÓN FINANCIERA",
    title: "Cada transacción construye historial.",
    body: "TeCaigo busca convertir la actividad económica del ecosistema en trazabilidad e historial transaccional. Ese historial puede facilitar alianzas con la banca para desarrollar programas de inclusión financiera dirigidos a operadores, transporte y comercios turísticos.",
    metric: "TRAZABILIDAD + FORMALIZACIÓN",
    thesisLabel: "OPORTUNIDADES FUTURAS",
    thesis: "Más trazabilidad. Más formalización. Más acceso a oportunidades.",
  },
];

export default function ValuePropositionSlide({slide,reduceMotion,sceneIndex=0}:{slide:PitchSlide;reduceMotion:boolean;sceneIndex?:0|1|2}) {
  const active=sceneIndex;
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
      <motion.div key={active} className={`value-sequence__copy value-sequence__copy--${active}`}
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
      <span>{scene.thesisLabel}</span>
      <p>{scene.thesis}</p>
    </motion.div>
    <div className="value-sequence__steps">{scenes.map((item,index)=><span key={item.image} className={index===active?"is-active":""}><i/></span>)}</div>
  </div>;
}
