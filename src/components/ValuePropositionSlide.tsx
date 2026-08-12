"use client";

import { motion } from "framer-motion";
import type { PitchSlide } from "../data/slides";

const top = [
  ["Nuevas Rutas","v"],["Inclusión Financiera","s"],["Más Ventas","l"],["Costos Compartidos","m"],
  ["Capacidad Aprovechada","m"],["Nuevos Clientes","l"],["Nuevos Mercados","s"],["Venta Colaborativa","v"],
  ["Turismo Conectado","l"],["Alianzas Estratégicas","m"],["Mayor Visibilidad","l"],["Nuevas Experiencias","v"],
] as const;
const bottom = [
  ["Conexión Comercial","m"],["Formalización Empresarial","v"],["Coordinación Logística","s"],["Transporte Integrado","l"],
  ["Desarrollo Local","v"],["Crecimiento Compartido","l"],["Más Reservas","m"],["Recursos Compartidos","s"],
  ["Acceso Financiero","s"],["Integración Turística","v"],["Optimización de Recursos","m"],["Ecosistema Turístico","l"],
] as const;

function Word({item,index,base,reduceMotion}:{item:readonly[string,string];index:number;base:number;reduceMotion:boolean}) {
  return <motion.span className={`value-mosaic__word is-${item[1]} tone-${(index+base)%4}`} initial={reduceMotion?false:{opacity:0,scale:.55,y:base? -18:18,filter:"blur(8px)"}} animate={{opacity:1,scale:1,y:0,filter:"blur(0px)"}} transition={{delay:reduceMotion?0:.35+(index+base)*.22,duration:.68,type:"spring",stiffness:120,damping:17}}>{item[0]}</motion.span>;
}

export default function ValuePropositionSlide({slide,reduceMotion}:{slide:PitchSlide;reduceMotion:boolean}) {
  return <div className="value-mosaic" aria-label="Mosaico animado de beneficios de TeCaiGO">
    <div className="value-mosaic__glow" aria-hidden="true"/>
    <div className="value-mosaic__composition">
      <div className="value-mosaic__band value-mosaic__band--top">{top.map((item,index)=><Word key={item[0]} item={item} index={index} base={0} reduceMotion={reduceMotion}/>)}</div>
      <motion.div className="value-mosaic__hero" initial={reduceMotion?false:{opacity:0,scaleX:.42,filter:"blur(14px)"}} animate={{opacity:1,scaleX:1,filter:"blur(0px)"}} transition={{delay:reduceMotion?0:3.2,duration:1.15,ease:[.22,1,.36,1]}}>
        <span>BENEFICIOS</span><small>TeCaiGO · VALOR COMPARTIDO</small>
      </motion.div>
      <div className="value-mosaic__band value-mosaic__band--bottom">{bottom.map((item,index)=><Word key={item[0]} item={item} index={index} base={12} reduceMotion={reduceMotion}/>)}</div>
    </div>
    <motion.div className="value-mosaic__message" initial={reduceMotion?false:{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:reduceMotion?0:7.4,duration:.9}}>
      <span>PROPUESTA DE VALOR</span><h1>{slide.title}</h1>
    </motion.div>
  </div>;
}
