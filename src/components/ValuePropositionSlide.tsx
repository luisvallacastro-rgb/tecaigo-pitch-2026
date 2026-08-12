"use client";

import { motion } from "framer-motion";
import type { PitchSlide } from "../data/slides";

const benefits = [
  ["Nuevas Rutas","xl",9,16],["Inclusión Financiera","md",28,13],["Más Ventas","xl",47,15],["Costos Compartidos","lg",71,13],
  ["Capacidad Aprovechada","md",15,31],["Nuevos Clientes","lg",39,30],["Nuevos Mercados","md",64,29],["Venta Colaborativa","xl",84,31],
  ["Turismo Conectado","xl",20,48],["Alianzas Estratégicas","md",44,47],["Mayor Visibilidad","lg",70,47],["Nuevas Experiencias","lg",88,49],
  ["Conexión Comercial","md",10,66],["Formalización Empresarial","sm",31,64],["Coordinación Logística","md",55,65],["Transporte Integrado","lg",79,66],
  ["Desarrollo Local","lg",17,83],["Crecimiento Compartido","xl",40,81],["Más Reservas","lg",66,82],["Recursos Compartidos","md",87,82],
  ["Acceso Financiero","sm",9,94],["Integración Turística","md",31,94],["Optimización de Recursos","sm",62,94],["Ecosistema Turístico","lg",86,94],
] as const;

export default function ValuePropositionSlide({ slide, reduceMotion }: { slide: PitchSlide; reduceMotion: boolean }) {
  return (
    <div className="value-proposition" aria-label="Beneficios de la propuesta de valor de TeCaiGO">
      <div className="value-proposition__grid" aria-hidden="true" />
      <svg className="value-proposition__network" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {benefits.map((item,index)=><motion.line key={item[0]} x1="50" y1="53" x2={item[2]} y2={item[3]} initial={reduceMotion?false:{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:.22}} transition={{delay:reduceMotion?0:1.7+index*.13,duration:.8}} />)}
      </svg>
      <div className="value-proposition__words value-proposition__words--mosaic">
        {benefits.map((item,index)=>(
          <motion.span
            key={item[0]}
            className={`is-${item[1]} tone-${index%4} ${index%5===1||index%7===0?"is-vertical":""}`}
            style={{left:`${item[2]}%`,top:`${item[3]}%`}}
            initial={reduceMotion?false:{opacity:0,scale:.62,y:20,filter:"blur(9px)"}}
            animate={{opacity:index<4?.98:index<12?.86:.68,scale:1,y:0,filter:"blur(0px)"}}
            transition={{delay:reduceMotion?0:.35+Math.floor(index/4)*1.15+(index%4)*.16,duration:.7,type:"spring",stiffness:115,damping:16}}
          >{item[0]}</motion.span>
        ))}
      </div>
      <motion.div className="value-proposition__hero-word" initial={reduceMotion?false:{opacity:0,scaleX:.55,filter:"blur(12px)"}} animate={{opacity:1,scaleX:1,filter:"blur(0px)"}} transition={{delay:reduceMotion?0:4.8,duration:1.1,ease:[.22,1,.36,1]}}>VALOR</motion.div><motion.div className="value-proposition__core" initial={reduceMotion?false:{opacity:0,scale:.65}} animate={{opacity:1,scale:1}} transition={{delay:reduceMotion?0:5.8,duration:1,type:"spring"}}>
        <strong><span>TeCai</span>GO</strong><small>VALOR COMPARTIDO</small><i/><i/>
      </motion.div>
      <motion.div className="value-proposition__message" initial={reduceMotion?false:{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:reduceMotion?0:7.2,duration:.9}}>
        <span>PROPUESTA DE VALOR</span>
        <h1>{slide.title}</h1>
      </motion.div>
    </div>
  );
}
