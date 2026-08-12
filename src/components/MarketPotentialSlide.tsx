"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const scenes = [
  { image:"/assets/page-5/tour-operador.jpg", sector:"Prioridad inicial", title:"Cubrir todo El Salvador.", detail:"Comenzamos conectando la oferta turística de los distintos destinos del país." },
  { image:"/assets/page-5/transporte.jpg", sector:"Cobertura nacional", title:"Una red que llega a cada destino.", detail:"Operadores y transporte articulados para ampliar la capacidad de operación nacional." },
  { image:"/assets/page-5/comercios.jpg", sector:"Oferta nacional", title:"Integrar hoteles, restaurantes y comercios.", detail:"Cada negocio suma su oferta a una red turística visible en todo El Salvador." },
  { image:"/assets/page-5/turistas.jpg", sector:"Demanda nacional", title:"Conectar turistas con todo el país.", detail:"Una sola plataforma para descubrir, reservar y comprar experiencias nacionales." },
  { image:"/assets/page-5/turistas-online.jpg", sector:"Mercado conectado", title:"Consolidar el mercado salvadoreño.", detail:"Más actores, más destinos y más transacciones dentro de una misma red." },
  { image:"/assets/page-5/banca.jpg", sector:"Mercado fortalecido", title:"Hacer predecible el modelo.", detail:"Datos y trazabilidad para fortalecer la operación turística de El Salvador." },
  { image:"/assets/page-5/universidades.jpg", sector:"Meta nacional", title:"El Salvador, conectado de punta a punta.", detail:"Primero consolidamos una red nacional sólida, activa y sostenible." },
] as const;

const SCENE_MS = 30000 / scenes.length;

export default function MarketPotentialSlide({reduceMotion,running}:{reduceMotion:boolean;running:boolean}) {
  const [active,setActive] = useState(0);
  useEffect(() => {
    setActive(0);
    if (reduceMotion || !running) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % scenes.length), SCENE_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion,running]);
  const scene = scenes[active];
  return <div className="market-potential" aria-label="Potencial de mercado de TeCaiGO en El Salvador">
    <AnimatePresence initial={false} mode="popLayout">
      <motion.figure key={scene.image} className="market-potential__scene" initial={reduceMotion?false:{opacity:0,x:"12%",scale:1.06}} animate={{opacity:1,x:0,scale:1}} exit={reduceMotion?undefined:{opacity:0,x:"-7%",scale:1.02}} transition={{duration:reduceMotion?0:1.15,ease:[.22,1,.36,1]}}>
        <img src={scene.image} alt="" />
      </motion.figure>
    </AnimatePresence>
    <div className="market-potential__shade" aria-hidden="true" />
    <AnimatePresence mode="wait">
      <motion.div key={active} className="market-potential__copy" initial={reduceMotion?false:{opacity:0,y:32}} animate={{opacity:1,y:0}} exit={reduceMotion?undefined:{opacity:0,y:-18}} transition={{delay:reduceMotion?0:.32,duration:.72}}>
        <span>{scene.sector}</span><h1>{scene.title}</h1><p>{scene.detail}</p>
      </motion.div>
    </AnimatePresence>
    <div className="market-potential__thesis"><strong>EL SALVADOR</strong><span>COBERTURA NACIONAL</span><i/><span>CONSOLIDACIÓN</span></div>
    <div className="market-potential__rail" aria-label={`Vista ${active+1} de ${scenes.length}`}>
      {scenes.map((item,index)=><button key={item.image} className={index===active?"is-active":""} onClick={()=>setActive(index)} aria-label={`Mostrar ${item.sector}`}><i/></button>)}
    </div>
  </div>;
}
